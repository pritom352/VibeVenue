import React from "react";

const Details = ({ description, thumbnail }) => {
  return (
    <div className=" rounded-2xl bg-amber-100 p-3">
      <img className=" w-full rounded-2xl" src={thumbnail} alt="" />
      <div className="divider text-3xl font-bold  text-shadow-lg my-7 ">
        <span className=" text-orange-400">About</span> Event
      </div>
      <p className="text-justify bg-white m-5 rounded-2xl p-2">{description}</p>
    </div>
  );
};

export default Details;
