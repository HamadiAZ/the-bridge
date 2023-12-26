import React, { useEffect, useState } from "react";

function Card({ image, title, price }) {
  const [img, setImg] = useState(null);

  const handleImageLoad = () => {
    const imagePath = process.env.PUBLIC_URL +"/images" +image;
    console.log(imagePath)
    fetch(imagePath)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result.split(",")[1];
          setImg(`data:image/jpeg;base64,${base64}`);
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    handleImageLoad();
  }, [])
  
  return (
    <div className="w-full">
      {img && <img  className="w-full max-h-52 object-cover" src={img} alt="Loaded" />}
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2">{title}</p>
        <p className="text-pink-700 font-bold">{price} DT/ Month</p>
      </div>
    </div>
  );
}

export default Card;
