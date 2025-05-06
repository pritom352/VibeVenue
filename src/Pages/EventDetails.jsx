import React from "react";
import { useLoaderData, useParams } from "react-router";
import Details from "../Components/Details";
import RigntAside from "../Components/RigntAside";

const EventDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const details = data.find((data) => data.id == id);
  console.log(details);
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
      <div className="divider text-5xl font-bold italic text-shadow-lg my-20 mx-15">
        <span className=" text-orange-400">Event</span> Details
      </div>
      {/* <h1 className=" text-5xl font-bold italic text-center text-orange-400 text-shadow-2xs">
        Event <span className="text-black">Details</span>
      </h1> */}
      <div className=" flex justify-between gap-15 mx-20">
        <main className=" w-2/3 shadow-2xl">
          <Details thumbnail={thumbnail} description={description}></Details>
        </main>
        <aside className=" border w-1/3">
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
