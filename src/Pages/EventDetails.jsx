import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import Details from "../Components/Details";
import RigntAside from "../Components/RigntAside";
import { AuthContext } from "../Provider/AuthContext";
import { Helmet } from "react-helmet-async";

const EventDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const details = data.find((data) => data.id == id);

  const {
    title,
    time,
    thumbnail,
    description,
    duration,
    entry_fee,
    location,
    date,
    email,
  } = details;

  return (
    <div>
      <Helmet>
        <title>Event Details</title>
      </Helmet>
      <div className="divider text-2xl md:text-3xl lg:text-5xl font-bold italic text-shadow-lg my-10 lg:my-20 lg:mx-15">
        <span className=" text-orange-400">Event</span> Details
      </div>

      <div className=" flex flex-col lg:flex-row justify-between gap-20 lg:mx-20">
        <main className=" flex-grow bg-amber-100 lg:w-2/3 shadow-2xl ">
          <Details thumbnail={thumbnail} description={description}></Details>
        </main>
        <aside className=" flex-grow  lg:w-1/3">
          <RigntAside
            name={title}
            duration={duration}
            time={time}
            location={location}
            date={date}
            entry_fee={entry_fee}
            email={email}
          ></RigntAside>
        </aside>
      </div>
    </div>
  );
};

export default EventDetails;
