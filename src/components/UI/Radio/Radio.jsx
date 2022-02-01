import React from 'react';

const Radio = (props) => {

  return (
    <button value={props.label} className='text-grey-6 mt-2 block py-[10px] pl-4 pr-[30px] bg-white-003 rounded-full cursor-pointer hover:text-grey-7 transition-text'>
      <div className='w-[10px] h-[10px] mr-4 inline-block bg-black-02 rounded-full'></div>
      {props.label}
    </button>
  );
};

export default Radio;