import React from "react";
import { useLoaderData } from "react-router";
import FaqCard from "../Components/FaqCard";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet-async";

const Faq = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>FAQ</title>
      </Helmet>
      <NavBar></NavBar>
      <div className="px-10 md:px-15 lg:px-25">
        <h1 className=" text-xl md:text-2xl lg:text-3xl md:text-4xl lg:text-5xl text-center font-bold italic my-10">
          <span className="text-orange-400 ">Frequently</span> Asked Questions
        </h1>
        {data.map((data) => (
          <FaqCard data={data}></FaqCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Faq;
