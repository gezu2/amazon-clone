import classes from "./footer.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <layout>
      <div className={classes.top}>
        <Link to="/" onClick={() => navigate("/")}>
          <h3>Back to Top</h3>
        </Link>
      </div>

      <footer className={classes.footer}>
        <div className={classes.footer__container}>
          <div className={classes.footer__on}>
            <div className={classes.footer__section}>
              <h3 className={classes.footer__heading}>Get to Know Us</h3>
              <Link to="#" className={classes.footer__link}>
                Careers
              </Link>

              <li>
                <Link to="" className={classes.footer__link}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  About Amazon
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  Amazon Devices
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  Amazon Science
                </Link>
              </li>
            </div>

            <div className={classes.footer__section}>
              <h3 className={classes.footer__heading}>Make Money with Us</h3>
              <Link to="#" className={classes.footer__link}>
                Sell products on Amazon
              </Link>
              <li>
                <Link to="" className={classes.footer__link}>
                  Sell on Amazon Business
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  Sell apps on Amazon
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                Become an Affiliate
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                Advertise Your Products
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                Self-Publish with Us
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                Host an Amazon Hub
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                See More Make Money with Us
                </Link>
              </li>
                    </div>
            <div className={classes.footer__section}>
              <h3 className={classes.footer__heading}>
                Amazon Payment Products
              </h3>
              <li>
                <Link to="" className={classes.footer__link}>
                  Amazon Business Card
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  Shop within Points
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  Reload your balance
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  Amazon Currency Converter
                </Link>
              </li>
            </div>
            <div className={classes.footer__section}>
              <h3 className={classes.footer__heading}>Let Us Help You</h3>
              <li>
                <Link to="" className={classes.footer__link}>
                  Amazon and COVID-19
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  Your Account
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  Your Orders
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  Shipping Rates & Policies
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  Returns & Replacements
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  Manage Your Content and Devices
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  Amazon Assistant
                </Link>
              </li>
              <li>
                <Link to="" className={classes.footer__link}>
                  Help
                </Link>
              </li>
            </div>
          </div>
        </div>
        <div className={classes.footer__bottom}>
          <p className={classes.footer__copyright}>
            &copy;Conditions of Use
Privacy Notice
Your Ads Privacy Choices
© 1996-2024, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </footer>
    </layout>
  );
};

export default Footer;
