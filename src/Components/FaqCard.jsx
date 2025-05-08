import React from "react";

const FaqCard = ({ data }) => {
  const { question, answer } = data;
  return (
    <div className=" border rounded-2xl my-6 bg-amber-50 space-y-4 p-5 ">
      <p className=" text-4xl font-semibold   ">Question: {question}</p>
      <div className="divider"></div>
      <p className=" text-2xl font-semibold  ">Answer: {answer}</p>
    </div>
  );
};

export default FaqCard;
