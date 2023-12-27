import React, { useState, useEffect } from "react";
import axios from "axios";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  // Fetch messages when the component mounts
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/messages");
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Message List</h2>
      <div className="flex flex-wrap -mx-4">
        {messages.map((message) => (
          <div key={message.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4">
            <div className="p-4 bg-gray-100 rounded-md">
              <p className="text-lg font-semibold">{message.name}</p>
              <p className="text-gray-600">{message.email}</p>
              <p className="mt-2 overflow-scroll">{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
