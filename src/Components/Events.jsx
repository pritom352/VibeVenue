import React from "react";
import Card from "./Card";

const Events = ({ events }) => {
  return (
    <div className=" my-20">
      <div className="divider text-2xl md:text-3xl  lg:text-4xl font-bold mb-10 italic text-shadow-lg">
        <span className=" text-orange-400">Upcoming</span> Events
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <Card key={event.id} event={event}></Card>
        ))}
      </div>
    </div>
  );
};

export default Events;
