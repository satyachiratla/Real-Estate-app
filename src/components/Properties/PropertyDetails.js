import classes from './PropertyDetails.module.css';

const PropertyDetails = ({ image, address, price, description, location, email }) => {
    return (
        <div className={classes.property}>
             <div className={classes.image}>
                <img src={image} alt="property" height="300px" width="100%" />
            </div>
            <div className={classes.details}>
                <h3>{address}</h3>
                <h2>{location}</h2>
                <p>₹{price}</p>
            </div>
            <div className={classes.description}>
                <p>{description}</p>
            </div>
            <div className={classes.contact}>
                <span style={{ color: 'black', fontWeight: 'bold' }}>Contact: </span>
                <a href={email}><span>{email}</span></a>
            </div>
        </div>
    )
}

export default PropertyDetails;