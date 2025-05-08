import React from "react";
import TextimnialCard from "./TextimnialCard";
import Marquee from "react-fast-marquee";

const Testimonials = ({ testimonials }) => {
  return (
    <div>
      <h1 className="mt-20 mb-4 text-2xl md:text-3xl lg:text-4xl italic font-bold text-center text-shadow-2xs">
        <span className=" text-orange-400">Why People</span> Trust Us
      </h1>
      <div className="flex gap-5 items-center ">
        <Marquee>
          {testimonials.map((data) => (
            <TextimnialCard key={data.name} data={data}></TextimnialCard>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;
