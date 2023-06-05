import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './Property.module.css'

const Property = ({ id, address, image, price }) => {
    return (
        <li className={classes.property}>
            <div className={classes.image}>
                <img src={image} alt="property" height="250px" width="350px" />
            </div>
            <div className={classes.details}>
                <h3>{address}</h3>
                <p>₹{price}</p>
            </div>
            <Link to={`/${id}`} className={classes.button}>
                <button>More Details</button>
            </Link>
        </li>
    )
}

export default Property;