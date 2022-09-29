import React from 'react';

const BreakTime = ({handleBreakTime}) => {
  return (
    <div>
      <h5 className='mb-3 font-medium'>Add A Break</h5>
      <div className='bg-slate-300 px-3 py-3 rounded-lg text-center'>
          <button onClick={() => handleBreakTime(10)} className='rounded-full p-2 bg-orange-400 ml-2'>10s</button>
          <button onClick={() => handleBreakTime(20)} className='rounded-full p-2 bg-orange-400 ml-2'>20s</button>
          <button onClick={() => handleBreakTime(30)} className='rounded-full p-2 bg-orange-400 ml-2'>30s</button>
          <button onClick={() => handleBreakTime(40)} className='rounded-full p-2 bg-orange-400 ml-2'>40s</button>
          <button onClick={() => handleBreakTime(50)} className='rounded-full p-2 bg-orange-400 ml-2'>50s</button>
      </div>
    </div>
  );
};

export default BreakTime;