import React from "react";

const Details = ({ description, thumbnail }) => {
  return (
    <div className=" rounded-2xl bg-amber-100 p-2 md:p-3 ">
      <img className=" w-full rounded-2xl" src={thumbnail} alt="" />
      <div className="divider text-xl md:text-2xl lg:text-3xl font-bold  text-shadow-lg my-7 ">
        <span className=" text-orange-400">About</span> Event
      </div>
      <p className="text-justify bg-white m-1 md:m-3 lg:m-5 rounded-2xl p-2">
        {description}
      </p>
    </div>
  );
};

export default Details;
