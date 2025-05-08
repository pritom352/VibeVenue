import React from "react";

const TextimnialCard = ({ data }) => {
  const { name, image, review } = data;
  return (
    <div className=" rounded-2xl shadow-xl ml-5 my-10 w-[250px] lg:w-[300px] min-h-[300px] lg:min-h-[250px] bg-amber-100 text-center relative flex flex-col px-2 md:px-4  lg:px-5 pt-10 p-2 md:4 lg:pb-5">
      <img
        className="bg-white p-1 h-15 rounded-full absolute left-1/2 -top-6 transform -translate-x-1/2"
        src={image}
        alt=""
      />
      <h2 className="font-bold italic mt-1 md:mt-3 lg:mt-5">{name}</h2>

      <p className="bg-white p-1  md:p-2 rounded-2xl grow flex items-center justify-center">
        {review}
      </p>
    </div>
  );
};

export default TextimnialCard;
