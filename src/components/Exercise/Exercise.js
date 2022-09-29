import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Workout from "../Workout/Workout";
import logo from "../../images/barbell.png";

const Exercise = () => {
  const [exercise, setExercise] = useState([]);
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    fetch("exercise.json")
      .then((res) => res.json())
      .then((data) => setExercise(data));
  }, []);

  const handleToDoList = (id) => {
    const addToList = exercise.find((workout) => workout.id === id);
    const newToDoList = [...toDoList, addToList];
    setToDoList(newToDoList);
  };

  return (
    <div className="bg-zinc-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="order-last sm:order-first md:col-span-2 lg:col-span-3 p-11">
          <div>
              <div className="flex">
                <img className="w-9 h-9 mr-3" src={logo} alt="" />
                <h1 className="uppercase font-extrabold text-3xl text-stone-400">
                  Power Surge Gym
                </h1>
              </div>
            <p className="text-lg font-medium text-stone-600 mt-3 mb-3">
              Select Today's Exercise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exercise.map((workout) => (
              <Workout
                key={workout.id}
                workout={workout}
                handleToDoList={handleToDoList}
              ></Workout>
            ))}
          </div>
        </div>
        <div className="bg-slate-100 relative">
          <Sidebar toDoList={toDoList}></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
