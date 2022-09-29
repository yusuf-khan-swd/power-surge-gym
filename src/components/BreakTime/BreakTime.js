import React from 'react';

const BreakTime = ({handleBreakTime}) => {
  return (
    <div>
      <h5>Add A Break</h5>
      <div className='bg-slate-300 px-3 py-3 rounded-lg'>
        <button onClick={() => handleBreakTime(10)} className='rounded-md bg-orange-200 ml-2'>10s</button>
        <button onClick={() => handleBreakTime(20)} className='rounded-md bg-orange-200 ml-2'>20s</button>
        <button onClick={() => handleBreakTime(30)} className='rounded-md bg-orange-200 ml-2'>30s</button>
        <button onClick={() => handleBreakTime(40)} className='rounded-md bg-orange-200 ml-2'>40s</button>
        <button onClick={() => handleBreakTime(50)} className='rounded-md bg-orange-200 ml-2'>50s</button>
      </div>
    </div>
  );
};

export default BreakTime;