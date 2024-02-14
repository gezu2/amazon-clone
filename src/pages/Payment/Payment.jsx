/* eslint-disable no-undef */
import Layout from "../../Component/Layout/Layout";
import CurrencyFormat from "../../Component/CurrencyFormat/CurrencyFormat";
import ProductCard from "../../Component/Product/ProductCard";
import classes from "./Payment.module.css";
import { axiosInstance } from "../../Api/axios";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Component/DataProvider/DataProvider";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import {db} from '../../Utility/firebase.js';
import { useContext, useState } from "react";
import { ClipLoader } from "react-spinners";

const Payment = () => {
  const [{ user, basket },dispatch] = useContext(DataContext);
  // console.log(user)
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const navigate=useNavigate();
  const handleChange = (e) => {
    e?.error.message ? setCardError(e?.error.message) : setCardError("");
  };
  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      // 1.backend || function contact to get client Secret
      setProcessing(true);
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total= ${total * 100}`,
      });
      console.log(response.data);
      const clientSecret = response.data?.clientSecret;

      //2.confirmation  react client side

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log(paymentIntent);
      // 3. after the confirmation ==>order database save, clear basket
      await db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
     // make empty basket
     dispatch({type:"EMPTY_BASKET"});

      setProcessing(false);
      navigate("/orders",{state:{msg:"you have placed new order"}})
    } catch (error) {
      console.error(error);
      setProcessing(false);
    }
  };

  return (
    <Layout>
      {/* header */}

      <div className={classes.payment__header}>Checkout {totalItem} items</div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3> Delivery Address </h3>

          <div> {user?.email}</div>
          <div> 123 react</div>
          <div> addis abeba</div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and Delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} key={item.id} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__Details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "8px" }}>
                      <p>Total Order | </p>
                      <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={classes.loading}>
                        {" "}
                        <ClipLoader color="gray" size={12} />
                      </div>
                    ) : (
                      "Pay now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;

