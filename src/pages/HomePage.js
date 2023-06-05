import { useState } from "react";
import Properties from "../components/Properties/Properties";
import SearchForm from "../components/Search/SearchForm";
import { propertiesData } from "../components/helpers/api-util";

const HomePage = () => {

  const [data, setData] = useState(propertiesData);

  const findHandler = (value) => {
    const filteredProperties = propertiesData.filter(property => property.location === value);
    setData(filteredProperties)
  };

  return (
    <div>
      <SearchForm onSearch={findHandler} />
      <Properties data={data} />
    </div>
  );
};

export default HomePage;
