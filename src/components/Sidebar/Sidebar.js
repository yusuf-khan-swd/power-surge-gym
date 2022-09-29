import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import Person from '../Person/Person';
import Toast from '../Toast/Toast';

const Sidebar = ({toDoList}) => {
  const [breakTime, setBreakTime] = useState(0);

  let totalTime = 0;
  for (const element of toDoList) {
    totalTime += element.time;
  }

  const handleBreakTime = breakTime => {
    setBreakTime(breakTime);
    localStorage.setItem('break-time', JSON.stringify(breakTime));
  }

  useEffect(() => {
    const savedBreakTime = localStorage.getItem('break-time');
    if(savedBreakTime) {
      setBreakTime(savedBreakTime)
    }
  }, []);

  return (
    <div className='w-4/5 mx-auto'>
      <div className='mb-5'>
        <Person></Person>
      </div>
      <div className='mb-5'>
        <BreakTime handleBreakTime={handleBreakTime}></BreakTime>
      </div>
      <h5>Exercise Details</h5>
      <p>Exercise Time: {totalTime} seconds </p>
      <p>Break Time: {breakTime} seconds </p>
      <Toast></Toast>
    </div>
  );
};

export default Sidebar;