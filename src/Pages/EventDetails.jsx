import React from "react";
import { useLoaderData, useParams } from "react-router";
import Details from "../Components/Details";

const EventDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const details = data.find((data) => data.id == id);
  console.log(details);
  const { name, thumbnail, description, category, entry_fee, location, date } =
    details;

  return (
    <div>
      <div className="divider text-5xl font-bold italic text-shadow-lg my-20 mx-20">
        <span className=" text-orange-400">Event</span> Details
      </div>
      {/* <h1 className=" text-5xl font-bold italic text-center text-orange-400 text-shadow-2xs">
        Event <span className="text-black">Details</span>
      </h1> */}
      <div className=" flex mx-20">
        <main className=" w-2/3 shadow-2xl">
          <Details thumbnail={thumbnail} description={description}></Details>
        </main>
        <aside></aside>
      </div>
    </div>
  );
};

export default EventDetails;
