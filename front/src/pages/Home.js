import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { dummyData } from "../const";
import backgroundImage from "../resources/homeBackground.jpg";

function Home() {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {dummyData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      {/* Contact */}
      <div className="flex flex-col mb-20 justify-center items-center gap-3 w-full h-fit py-3 md:w-2/3 lg:w-6/12 xl:8/12 mx-auto md:rounded-3xl bg-amber-500">
        <p className="text-xl font-bold">Contact Us</p>
        <div className="flex flex-col w-fit">
          <label className="rounded-xl font-medium tracking-widest">NAME</label>
          <input className="rounded-full px-3 py-2 opacity-80  min-w-96" placeholder="Jiara Martins"></input>
        </div>
        <div className="flex flex-col w-fit">
          <label className="rounded-xl font-medium tracking-widest">EMAIL</label>
          <input className="rounded-full px-3 py-2 opacity-80  min-w-96" placeholder="Hello@really.com"></input>
        </div>
        <div className="flex flex-col w-fit">
          <label className="rounded-xl font-medium tracking-widest">MESSAGE</label>
          <textarea className="rounded-2xl h-40 px-3 py-2 opacity-80 min-w-96" placeholder="Write your message here"></textarea>
        </div>
        <button className="py-1 w-fit px-9 mb-4 mt-2 bg-pink-700 text-white text-lg font-semibold rounded-lg" style={{ fontFamily: "Segoe UI" }}>
          Send the message
        </button>
      </div>
    </React.Fragment>
  );
}

export default Home;
