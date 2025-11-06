import { div, h1 } from "framer-motion/client";
import React from "react";


function Card({ title = "Development", subtitle = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", image = defaultIcon }) {
  return (
    <div className="p-15 max-w-sm mx-auto border  rounded shadow-md flex flex-col items-center space-y-4 text-sm ">
      <img
        className="object-contain h-18 w-20"
        src={image}
        alt={`${title} icon`}
      />
      <h1 className="text-xl font-semibold ">{title}</h1>
      <p className="text-center text-sm text-gray-700">{subtitle}</p>
    </div>
  );
}

export default Card;