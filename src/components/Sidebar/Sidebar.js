import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';

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
    <div>
      <BreakTime handleBreakTime={handleBreakTime}></BreakTime>
      <h5>Exercise Details</h5>
      <p>Exercise Time: {totalTime} seconds </p>
      <p>Break Time: {breakTime} seconds </p>
    </div>
  );
};

export default Sidebar;