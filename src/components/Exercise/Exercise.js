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
    <div className="grid grid-cols-2">
      <div>
        {exercise.map((workout) => (
          <Workout
            key={workout.id}
            workout={workout}
            handleToDoList={handleToDoList}
          ></Workout>
        ))}
      </div>
      <div className="">
      <Sidebar toDoList={toDoList}></Sidebar>
      </div>
    </div>
  );
};

export default Exercise;
