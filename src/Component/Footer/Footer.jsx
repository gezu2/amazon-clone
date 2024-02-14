
import classes from './footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <layout>
    <div>
<Link to="#top"><h3>Back to Top</h3></Link>
    </div>

    <div  className={classes.Footer}>
        <div className={classes.container1}>
        <li><Link to="">Get to Know Us</Link></li>
        <li><Link to=""></Link></li>
        <li><Link to=""></Link></li>
        <li><Link to=""></Link></li>
        <li><Link to=""></Link></li>

        </div>
        <div className={classes.container2}>
            
            <li><Link to=""><h2>Make Money with Us</h2></Link></li>
            <li><Link to=""></Link></li>
            <li><Link to=""></Link></li>
            <li><Link to=""></Link></li>
            <li><Link to=""></Link></li>
            
            
        </div>
        <div className={classes.container3}>
        <li><Link to=""><h2>	
Amazon Payment Products</h2></Link></li>
        <li><Link to=""></Link></li>
        <li><Link to=""></Link></li>
        <li><Link to=""></Link></li>
        <li><Link to=""></Link></li>
        <li><Link to=""></Link></li>
        <li><Link to=""></Link></li>
        <li><Link to=""></Link></li>
        </div>
        <div className={classes.container4}>
        <li><Link to=""><h2>Let Us Help You</h2></Link></li>
        <li><Link to=""></Link></li>
        <li><Link to=""></Link></li>
        <li><Link to=""></Link></li>
        <li><Link to=""></Link></li>
        <li><Link to=""></Link></li>
        </div>
    </div>
    </layout>
  )
}

export default Footer