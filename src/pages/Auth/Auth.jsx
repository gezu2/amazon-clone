/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { Link, useNavigate ,useLocation} from "react-router-dom";
import Layout from "../../Component/Layout/Layout";
import classes from "./Signup.module.css";
import amazonim from "../../assets/images/amazon.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { DataContext } from "../../Component/DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";
import { ClipLoader } from "react-spinners";
import { Type } from "../../Utility/actiontype";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, dispatch] = useContext(DataContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState({ signIn: false, signUp: false });
  const navigate = useNavigate();
  const navStateData=useLocation();
  //console.log(navStateData);

  const authHandler = async (e) => {
    e.preventDefault();
   if (e.target.name === "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate( navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <Layout>
      <section className={classes.login}>
        {/* logo */}
        <Link to="/">
          {" "}
          <img src={amazonim} alt="" />
        </Link>
        {/* form */}
        <div className={classes.login__container}>
          <h1>Sign In</h1>
          { navStateData?.state?.msg &&
            <small style={{
              padding:"5px",
              textAlign:"center",
              color:"red",
              fontWeight:"bold",
            }}
            >{navStateData?.state?.msg}</small>
          }
          <form action="">
            <div>
              <label htmlFor="email">Email: </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>
            <button
              type="submit"
              onClick={authHandler}
              name="signin"
              className={classes.login__signInButton}>
              {loading.signIn ? (
                <ClipLoader color="#0000" size={14}>
                  {" "}
                </ClipLoader>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
          {/* agreement  */}
          <p>
            By signing you agree to the Amazon clone conditions of Use and
            Sale. Please see our Privacy Notice, Our Cookies Notice, and our
            interest
          </p>
          <button
            type="submit"
            onClick={authHandler}
            className={classes.login__registerButton}>
            {loading.signUp ? (
              <ClipLoader color="#0000" size={14}>
                {" "}
              </ClipLoader>
            ) : (
              "Create your Amazon Account"
            )}
          </button>
          {error && (
            <small
              style={{ paddingTop: "5px", color: "red", fontSize: "0.8rem" }}>
              {error}
            </small>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Auth;
