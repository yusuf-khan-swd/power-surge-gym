import React from "react";
import "./Workout.css";

const Workout = ({ workout, handleToDoList }) => {
  const { id, name, img, age, time, about } = workout;
  return (
    <div className="card p-3 bg-white shadow-md rounded-md">
      <img className="h-56 w-fit mx-auto rounded-md" src={img} alt="" />
      <h5 className="text-xl font-bold mb-2 mt-2">{name}</h5>
      <p className="text-gray-400 mb-2">{about}</p>
      <p>For Age: {age} </p>
      <p>Time Require: {time}s </p>
      <button
        className="bg-lime-500 w-full rounded-md py-2 mt-4"
        onClick={() => {
          handleToDoList(id);
        }}
      >
        <p>Add to list</p>
      </button>
    </div>
  );
};

export default Workout;
