import { div } from "framer-motion/client";
import React from "react";

const TextCard = ({h2}) => {
  return (
    <>
      <div className=" p-6  ">
        <p className="text-gray-700 " style={{ paddingLeft: "15rem" }}>
          JUN 28, 2024
        </p>
        <h2 className="md:text-xl text-black font-bold mb-2 justify-center md:gap-80 flex sm:text-sm sm:gap-0">
          {h2}
          <span className="text-gray-500 text-sm  ">2 MINS READ {}</span>
        </h2>
        <hr className="text-gray-300" />
      </div>
    </>
  );
};

export default TextCard;
