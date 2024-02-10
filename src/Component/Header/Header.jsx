/* eslint-disable no-unused-vars */
import classes from "./Header.module.css";
import { FaSearch, FaCartArrowDown } from "react-icons/fa";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import{auth} from '../../Utility/firebase'
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import amazonLogo from "../../assets/images/img1.png";
import { MdLocationOn } from "react-icons/md";

const Header = () => {
  const [{ user, basket }, dispacth] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* {logo} */}
          <div className={classes.log__container}>
            <Link to="/">
              {" "}
              <img src={amazonLogo} alt="amazonLogo" />
            </Link>
          </div>
          {/* {delivery} */}
          <span>
            <MdLocationOn />
          </span>
          <div className={classes.delivery}>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
          <div className={classes.search}>
            {/* {Search} */}
            <select name="" id="">
              <option value="">All</option>
              <option value="">Category</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <FaSearch />
          </div>
          {/* {right side links} */}
          <div className={classes.order__container}>
            <div className={classes.language}>
              <img
                src="https://freesvg.org/img/united-states-daniel-mcr-01.png"
                alt=""
              />
              <select name="" id="">
                <option value="">En</option>
              </select>
            </div>
            {/* {three components} */}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={()=>auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                  <p> hello,Sign In</p>
                  <span> Account & Lists</span>
                  </>
                )}
              </div>
              <p>Sign</p>
              {/* <span>Account & Lists</span> */}
            </Link>
            {/* {order} */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* {cart} */}
            <Link to="/cart" className={classes.cart}>
              <FaCartArrowDown size={25} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
