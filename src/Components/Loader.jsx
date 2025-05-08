import React from "react";
import { ClockLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className=" flex items-center justify-center mt-30">
      <ClockLoader color="orange" cssOverride={{}} size={250} />
    </div>
  );
};

export default Loader;
