import React from 'react';
import './Workout.css';

const Workout = ({workout}) => {
  const {name, img, age, time, about,} = workout;
  return (
    <div className='card'>
      <img className='w-56 h-56' src={img} alt="" />
      <h5>{name}</h5>
      <p>{about}</p>
      <p>For Age: {age} </p>
      <p>Time Require: {time}s </p>
      <button>To do list</button>
    </div>
  );
};

export default Workout;