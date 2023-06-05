import Property from "./Property";
import classes from './Properties.module.css'


const Properties = ({ data }) => {
  return (
    <ul className={classes.list}>
      {data.map((property) => {
        return (
          <Property
            key={property.id}
            id={property.id}
            address={property.address}
            image={property.image}
            price={property.price}
          />
        );
      })}
    </ul>
  );
};

export default Properties;
