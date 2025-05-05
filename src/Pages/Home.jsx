import React from "react";
import Slider from "../Components/Slider";
import { useLoaderData } from "react-router";
import Events from "../Components/Events";

const Home = () => {
  const events = useLoaderData();
  // console.log(events);

  return (
    <div>
      <Slider></Slider>
      <Events events={events}></Events>
    </div>
  );
};

export default Home;
