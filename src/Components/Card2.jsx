import React from 'react'

const Card2 = ({h2, p,}) => {
  return (
    <div className="bg-white gap-8 flex  py-12 px-6">
      <img
        className="rounded-full w-15 h-15 mb-6 border-4 shadow-lg "
        src="https://preview.colorlib.com/theme/orbit/images/person_1.jpg"
        alt=""
      />
      <div
        className=" bg-whitesmoke    text-black p-6 max-w-md  shadow-2xl  border-white rounded-lg flex flex-col space-y-4  "
        style={{ boxShadow: "0 -0px 16px 0 rgba(0,0,0,0.15)" }}
      >
        <h2 className=" mb-4">{h2}</h2>
        <p className="text-gray-700 ">{p}</p>
      </div>
    </div>
  );
}

export default Card2