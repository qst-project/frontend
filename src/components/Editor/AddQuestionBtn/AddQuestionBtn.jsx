import React, { useEffect, useRef } from 'react';
import {ReactComponent as Plus} from '../../../icons/plus.svg';

const AddQuestionBtn = () => {


  const unwrapBtn = () => {
    console.log(1);
  }

  const wrapBtn = () => {
    console.log(2);
  }

  // onMouseEnter={unwrapBtn} onMouseOut={wrapBtn} 

  return (
    <>
      <div onMouseEnter={unwrapBtn} onMouseOut={wrapBtn} className='flex justify-center mx-auto my-gradient-box w-[72px] h-[72px] rounded-3xl hover:w-[252px] cursor-pointer transition-w duration-500 group'>
        <div className='my-light-gradient rounded-3xl'></div>
        <div className='my-dark-gradient rounded-3xl'></div>
      </div>
      <div className='h-[72px] w-[252px] mt-[-72px]'>
        <div className='flex justify-around mt-[18px]'>
          <Plus className='fill-light-text-2 w-9 h-9'/>
          <Plus className='fill-light-text-2 w-9 h-9'/>
          <Plus className='fill-light-text-2 w-9 h-9'/>
        </div>
      </div>
    </>

  );
};

export default AddQuestionBtn;