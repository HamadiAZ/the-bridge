import React, { useEffect, useState } from "react";

function Card({ image_data, title, price }) {
  const [img, setImg] = useState(null);

  const handleImageLoad = () => {
    const uint8Array = new Uint8Array(image_data.data);
    const blob = new Blob([uint8Array], { type: "image/jpeg" });

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result.split(",")[1];
      setImg(`data:image/jpeg;base64,${base64}`);
    };
    reader.readAsDataURL(blob);
  };

  useEffect(() => {
    handleImageLoad(); // Trigger image load when the component mounts
  }, []);
  console.log(img);

  return (
    <div className="w-full">
      <img className="w-full max-h-52 object-cover" src={img} alt="Loaded" />
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2">{title}</p>
        <p className="text-pink-700 font-bold">{price} DT/ Month</p>
      </div>
    </div>
  );
}

export default Card;
