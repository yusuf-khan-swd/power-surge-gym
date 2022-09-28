import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';

const Exercise = () => {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    fetch('exercise.json')
      .then(res => res.json())
      .then(data => setExercise(data))
  }, []);

  const handleToDoList = id => {
    console.log('btn click', id);
  }

  return (
    <div>
      {exercise.map(workout => <Workout key={workout.id} workout={workout} handleToDoList={handleToDoList}></Workout>)}   
    </div>
  );
};

export default Exercise;