import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import { useLoaderData } from "react-router";
import Events from "../Components/Events";
import Testimonials from "../Components/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const events = useLoaderData();
  const [textimonials, setTextimonials] = useState([]);
  useEffect(() => {
    fetch("textimonials.json")
      .then((rsc) => rsc.json())
      .then((data) => setTextimonials(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider></Slider>

      <Events events={events}></Events>
      <Testimonials testimonials={textimonials}></Testimonials>
    </div>
  );
};

export default Home;
