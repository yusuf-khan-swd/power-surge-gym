import React from 'react';
import image from '../../images/myPIc.jpg';

const Person = () => {
  return (
    <div>
      <img className='w-28 rounded-sm' src={image} alt="" />
      <div>
        <h2>Yusuf Khan</h2>
        <p>Chittagong, Bangladesh</p>
      </div>
    </div>
  );
};

export default Person;