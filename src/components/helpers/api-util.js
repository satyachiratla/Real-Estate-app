import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpeg";
import image5 from "../../assets/image5.jpeg";

export const propertiesData = [
  {
    id: "1",
    email: 'jonsnow@gmail.com',
    address: "Madhapur/Phase 2/Sai-balaji-towers",
    image: image1,
    price: 3300000,
    location: "Hyderabad",
    description: `The word luxurious signals that a home's finishes and amenities are high end. Even lower-priced listings with the word luxurious benefit from it—selling for 8.2% more on average.Unlike the word "nice," "captivating" provides a richer, more enticing description for buyers. It's less open to interpretation, and it could get you more money—to the tune of 6.5%.`,
  },
  {
    id: "2",
    email: 'tyrion@gmail.com',
    address: "My-Home/Vihanga/Gatchibowli",
    image: image2,
    price: 7500000,
    location: "Delhi",
    description: `Not sure if having a basketball hoop in the driveway or a half-sized basketball court in your basement makes a difference, but Zillow.com found that the word "basketball" helps your home stand out, especially in low to mid-tier homes, and sell for as much as 4.5% more.`,
  },
  {
    id: "3",
    email: 'cersei@gmail.com',
    address: "My-Home/Sayuk/Kondapur",
    image: image3,
    price: 6200000,
    location: "Mumbai",
    description: `In addition to stainless steel appliances, buyers want a house with granite countertops. Period. Granite is considered to be a higher-end, quality feature and could net you 4% more for your house.`,
  },
  {
    id: "4",
    email: 'danaerys@gmail.com',
    address: "LB Nagar/Road no-5",
    image: image4,
    price: 7700000,
    location: "Punjab",
    description: `Real estate experts know that it's usually worth mentioning if you recently remodeled or made improvements to your home. Listings with the word "remodel" in them sold for as much as 2.9% more than expected.`,
  },
  {
    id: "5",
    email: 'arya@gmail.com',
    address: "Hitect-city/Brindavan Colony",
    image: image5,
    price: 5900000,
    location: "Lucknow",
    description: `Gentle typically is used to describe "gentle rolling hills" or something about a home's location, and you know what they say about real estate—it's all about location, location, location. Top-tier listings with the word “gentle” sold for 2.3% more, on average, than expected.`,
  },
];

export async function getPropertyById(id) {
  const property = await propertiesData;
  return property.find((prop) => prop.id === id);
}
