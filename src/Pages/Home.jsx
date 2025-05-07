import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import { useLoaderData } from "react-router";
import Events from "../Components/Events";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  const events = useLoaderData();
  // console.log(events);
  const [textimonials, setTextimonials] = useState([]);
  useEffect(() => {
    fetch("textimonials.json")
      .then((rsc) => rsc.json())
      .then((data) => setTextimonials(data));
  }, []);
  console.log(textimonials);
  return (
    <div>
      <Slider></Slider>

      <Events events={events}></Events>
      <Testimonials testimonials={textimonials}></Testimonials>
    </div>
  );
};

export default Home;
