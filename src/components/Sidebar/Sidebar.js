import React from 'react';

const Sidebar = ({toDoList}) => {

  let totalTime = 0;
  for (const element of toDoList) {
    totalTime += element.time;
  }
  return (
    <div>
      <p>Exercise Details</p>
      <p>Exercise Time: {totalTime} </p>
    </div>
  );
};

export default Sidebar;