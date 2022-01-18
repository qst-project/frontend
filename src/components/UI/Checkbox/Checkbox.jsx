import React from 'react';

const Checkbox = (props) => {
  return (
    <div>
      <label className='text-grey-6 mb-[5px] inline-block py-[10px] pl-4 pr-[30px] bg-white-003 rounded-full cursor-pointer hover:text-grey-7 transition-text'>
        <input className='hidden' type="checkbox" name={props.name}/>
        <div className='w-[10px] h-[10px] mr-4 inline-block bg-black-02 rounded-full'></div>
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;