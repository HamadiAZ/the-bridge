import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import backgroundImage from "../resources/homeBackground.jpg";
import axios from "axios";
import ContactForm from "../components/ContactForm";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
 

  return (
    <React.Fragment>
      <Header />

      <div className="flex justify-center items-center w-full h-fit bg-cover bg-center bg-no-repeat " style={{ height: "90vh", fontFamily: "Segoe UI", backgroundImage: `url(${backgroundImage})` }}>
        <div className="h-3/6 w-7/12 mt-20 min-h-fit min-w-fit flex flex-col gap-4 justify-center items-center bg-white bg-opacity-80 ">
          <p className="text-4xl text-center font-bold">Improve your skills on your own</p>
          <p className="text-4xl text-center font-bold">To prepare for a better future</p>
          <button className="p-4 w-5/12 bg-pink-700 text-white text-2xl font-semibold rounded-full " style={{ fontFamily: "Segoe UI" }}>
            REGISTER NOW
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-60 justify-around items-center ">
        <p className="text-5xl text-center font-bold">Discover Our Courses</p>
        <button className="py-3 w-3/12 bg-pink-700 text-white text-2xl font-semibold rounded-full " style={{ fontFamily: "Segoe UI" }}>
          View More
        </button>
      </div>

      {/* List cards */}
      <div className="px-3 md:px-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <ContactForm />
    </React.Fragment>
  );
}

export default Home;
