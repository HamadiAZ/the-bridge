import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to be sent
    const data = {
      name: name,
      email: email,
      message: message,
    };

    try {
      await axios.post("http://localhost:3001/sendMessage", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setName("");
      setEmail("");
      setMessage("");
      console.log("Message sent successfully!");
      setInfoMessage("Message sent !");
    } catch (error) {
      console.error("Error sending message:", error.message);
      setInfoMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col mb-20 justify-center items-center gap-3 w-full h-fit py-3 md:w-2/3 lg:w-6/12 xl:8/12 mx-auto md:rounded-3xl bg-amber-500">
      <p className="text-xl font-bold">Contact Us</p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-fit">
          <label className="rounded-xl font-medium tracking-widest">NAME</label>
          <input type="text" name="name" className="rounded-full px-3 py-2 opacity-80  min-w-96" placeholder="Jiara Martins" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="flex flex-col w-fit">
          <label className="rounded-xl font-medium tracking-widest">EMAIL</label>
          <input name="email" type="email" className="rounded-full px-3 py-2 opacity-80  min-w-96" placeholder="Hello@really.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="flex flex-col w-fit">
          <label className="rounded-xl font-medium tracking-widest">MESSAGE</label>
          <textarea name="message" className="rounded-2xl h-40 px-3 py-2 opacity-80 min-w-96" placeholder="Write your message here" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>

        <button onClick={handleSubmit} className="py-1 w-fit px-9 mb-2 mt-2 bg-pink-700 text-white text-lg font-semibold rounded-lg" style={{ fontFamily: "Segoe UI" }}>
          Send the message
        </button>
        {infoMessage != "" && <p className="mb-2">{infoMessage}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
