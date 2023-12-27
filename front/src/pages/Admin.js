import Header from "../components/Header";
import React, { useState } from "react";
import axios from "axios";

function Admin() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:3001/addProduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      // Reset form fields
      setTitle("");
      setPrice("");
      setImage(null);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="py-16 px-7 rounded-md bg-white">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)} name="title" placeholder="title" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 " />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}  name="price" placeholder="price" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" />
            <div className="md:col-span-2">
              <label for="image" className="float-left block  font-normal text-gray-400 text-lg">
                image :
              </label>
              <input type="file" name="image" accept="image/*" onChange={handleImageChange}  placeholder="Add photo" className="peer block w-full appearance-none border-none bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
            </div>

            <div className="md:col-span-2">
              <button className="py-3 text-base font-medium rounded text-white bg-pink-700 w-full hover:bg-pink-600 transition duration-300">Add</button>
            </div>
          </div>
        </form>
      </div>
     
    </React.Fragment>
  );
}
export default Admin;
