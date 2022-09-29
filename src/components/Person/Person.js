import React from "react";
import image from "../../images/myPIc.jpg";

const Person = () => {
  return (
    <div className="flex">
      <img className="w-24 h-24 rounded-full mr-5" src={image} alt="" />
      <div>
        <h2>Yusuf Khan</h2>
        <p>
          {" "}
          <small className="text-slate-400">Chittagong, Bangladesh</small>{" "}
        </p>
      </div>
    </div>
  );
};

export default Person;
