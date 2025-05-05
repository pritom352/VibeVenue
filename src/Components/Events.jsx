import React from "react";
import Card from "./Card";

const Events = ({ events }) => {
  //   console.log(events);

  return (
    <div className=" my-20">
      <div class="divider text-4xl font-bold italic text-shadow-lg">
        <span className=" text-orange-400">Upcoming</span> Events
      </div>
      <div className=" grid grid-cols-3 gap-8">
        {events.map((event) => (
          <Card key={event.id} event={event}></Card>
        ))}
      </div>
    </div>
  );
};

export default Events;
