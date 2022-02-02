import React from 'react';

const Checkbox = (props) => {
  
  return (
    <button value={props.label} className='trans-bg bg-white-003 dark:bg-blue-006 mt-2 block py-[10px] pl-4 pr-[30px] rounded-full cursor-pointer'>
      <div className='trans-bg dark:bg-font-blue w-[10px] h-[10px] mr-4 inline-block bg-black-02 rounded-full'></div>
      <span className='transition-text text-grey-6 dark:text-font-light-blue hover:text-grey-7 dark:hover:text-font-blue'>{props.label}</span>
    </button>
  );
};

export default Checkbox;