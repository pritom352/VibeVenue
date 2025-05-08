// import React from "react";
// import { FaMoneyCheckAlt } from "react-icons/fa";

// const Card = ({ event }) => {
//   console.log(event);
//   const { id, name, thumbnail, category, entry_fee, location, date } = event;

//   return (
//     <div className="border bg-amber-50 p-2 rounded-2xl shadow-lg shadow-black">
//       <div>
//         <img
//           className="w-full  overflow-hidden rounded-2xl"
//           src={thumbnail}
//           alt=""
//         />
//       </div>
//       <div className=" bg-white rounded-2xl p-3 mt-4 shadow-lg  ">
//         <h1>Name: {name}</h1>
//         <p>Category: {category}</p>
//         <p>
//           {" "}
//           Fee:
//           {/* <FaMoneyCheckAlt className=" inline-block" /> */}
//           {entry_fee}
//         </p>
//         <p>{location}</p>
//         <p>{date}</p>
// <a
//   href="#_"
//   class="relative inline-flex items-center justify-center  px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group"
// >
//   <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
//     <svg
//       class="w-6 h-6"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-width="2"
//         d="M14 5l7 7m0 0l-7 7m7-7H3"
//       ></path>
//     </svg>
//   </span>
//   <span class="absolute flex items-center justify-center w-full h-full text-black font-bold transition-all duration-300 transform group-hover:translate-x-full ease">
//     Button Text
//   </span>
//   <span class="relative invisible">Button Text</span>
// </a>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router";

const Card = ({ event }) => {
  const { id, name, thumbnail, category, entry_fee, location, date } = event;

  return (
    <div className=" transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl bg-amber-50 p-2 rounded-2xl shadow-lg shadow-black">
      <div className="overflow-hidden rounded-2xl">
        <img
          className=" lg:w-full lg:h-64  rounded-2xl"
          src={thumbnail}
          alt={name}
        />
      </div>
      <div className="bg-white rounded-2xl p-3 mt-6 shadow-lg space-y-2">
        <h1 className="font-semibold">Name: {name}</h1>
        <p>Category: {category}</p>
        <p>Fee: {entry_fee}</p>
        <p>Location: {location}</p>
        <p>Date:{date}</p>
        <Link
          to={`/eventDetails/${id}`}
          className="relative inline-flex items-center justify-center  px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-400 rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-400 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-black font-bold transition-all duration-300 transform group-hover:translate-x-full ease">
            View More
          </span>
          <span className="relative invisible">View More</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
