import React from "react";

const RigntAside = ({
  title,
  location,
  date,
  entry_fee,
  time,
  duration,
  email,
}) => {
  return (
    <div>
      <div className=" shadow-2xl rounded-xl ">
        <h2 className=" text-xl mx-auto mt-3 font-semibold text-orange-400 text-shadow-2xs italic w-fit border-b-4">
          Event <span className="text-black"> Details</span>
        </h2>
        <div className="my-2 space-y-2  p-4">
          <div className="dateSection">
            <p>Date</p>
            <p>{date}</p>
          </div>
          <div className="titleSection">
            <p>Event Title</p>
            <p>{title}</p>
          </div>
          <div className="DurationSection">
            <p>Duration</p>
            <p>{duration}</p>
          </div>
          <div className="timeSection">
            <p>Time</p>
            <p>{time}</p>
          </div>
          <div className="locationSection">
            <p>Location</p>
            <p>{location}</p>
          </div>
          <div className="feeSection">
            <p>Fee</p>
            <p>{entry_fee}</p>
          </div>
          <div className="emailSection">
            <p>Email</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
      <div className="card     shadow-2xl  mt-12 ">
        <h2 className=" text-3xl font-bold mx-auto  mt-3 text-orange-400  text-shadow-lg ">
          Reserve <span className=" text-black ">Seat</span>
        </h2>
        <div className="card-body pt-0 mt-3">
          <form>
            <label className="label">Name</label>
            <input
              type="text"
              className=" input text-black font-semibold focus:bg-orange-400 focus:text-white"
              placeholder=" Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input text-black font-semibold focus:bg-orange-400 focus:text-white"
              placeholder="Email"
            />

            <button className="btn btn-neutral hover:bg-orange-400 hover:border-none hover:font-bold mt-4">
              Reserve Seat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RigntAside;
