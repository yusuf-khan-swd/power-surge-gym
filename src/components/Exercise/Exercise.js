import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';

const Exercise = () => {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    fetch('exercise.json')
      .then(res => res.json())
      .then(data => setExercise(data))
  }, []);

  return (
    <div>
      <h1>Hello from Exercise</h1>
      {exercise.map(workout => <Workout key={workout.id} workout={workout}></Workout>)}   
    </div>
  );
};

export default Exercise;