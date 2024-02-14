/* eslint-disable react/no-unknown-property */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import Auth from "./pages/Auth/Auth";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51Oigw4LmA4kNVvD7ZYQ5UlkNSHKAaZlVOh89bJhKj1B2dmes9e5tLDGKjW2gedNY0IksSWccJrjAtmDDCdNylqW700UJlK3ick"
);

function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/Payment"
          element={
       <ProtectedRoute
       msg = {"you must login to pay"}
        redirect = {"/Payment"} >
            <Elements stripe={stripePromise}>
              <Payment/>
            </Elements>
           </ProtectedRoute>
          }/>
        <Route path="/orders" element={<ProtectedRoute msg={"you must login to access your orders"}
         redirect={"/orders"}>
         { <Orders />}
         </ProtectedRoute>
        }/>
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routering;
