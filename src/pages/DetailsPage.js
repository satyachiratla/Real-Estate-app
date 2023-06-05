import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import PropertyDetails from "../components/Properties/PropertyDetails";
import { propertiesData } from "../components/helpers/api-util";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const history = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const found = propertiesData.find((property) => property.id === history.id);
    setData(found);
  }, [history]);

  return (
    <PropertyDetails
      image={data.image}
      address={data.address}
      location={data.location}
      price={data.price}
      description={data.description}
      email={data.email}
    />
  );
};

export default DetailsPage;
