// import React from "react";

// const testimonials = [
//   {
//     name: "Rakib Hasan",
//     review: "The tech event was super helpful and well-organized!",
//     rating: 5,
//     image: "https://i.pravatar.cc/40?img=1",
//   },
//   {
//     name: "Nusrat Jahan",
//     review: "Loved the art exhibition. Great ambiance!",
//     rating: 4,
//     image: "https://i.pravatar.cc/40?img=2",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section style={{ padding: "40px 20px", background: "#f9f9f9" }}>
//       <h2>What People Are Saying</h2>
//       <div style={{ display: "flex", gap: "20px" }}>
//         {testimonials.map((t, index) => (
//           <div
//             key={index}
//             style={{
//               background: "#fff",
//               padding: "20px",
//               borderRadius: "8px",
//               width: "250px",
//             }}
//           >
//             <img src={t.image} alt={t.name} style={{ borderRadius: "50%" }} />
//             <h4>{t.name}</h4>
//             <p>"{t.review}"</p>
//             <p>
//               Rating: {"★".repeat(t.rating)}
//               {"☆".repeat(5 - t.rating)}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React from "react";
import TextimnialCard from "./TextimnialCard";
import Marquee from "react-fast-marquee";
// import { use } from "react";

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
