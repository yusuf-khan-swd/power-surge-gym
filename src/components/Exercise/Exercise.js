import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Workout from "../Workout/Workout";

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
      <div className="grid grid-cols-3">
        <div className="col-span-2 p-11">
          <div>
            <h1 className="uppercase font-extrabold text-3xl text-stone-400">
              Power Surge Gym
            </h1>
            <p className="text-lg font-medium text-stone-600 mt-3 mb-3">
              Select Today's Exercise
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {exercise.map((workout) => (
              <Workout
                key={workout.id}
                workout={workout}
                handleToDoList={handleToDoList}
              ></Workout>
            ))}
          </div>
        </div>
        <div className="">
          <Sidebar toDoList={toDoList}></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
