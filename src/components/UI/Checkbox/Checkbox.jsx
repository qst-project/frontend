import React from 'react';
import propTypes from 'prop-types';

const Checkbox = ({label, selectCheckbox, questionID, answerID, checked}) => {
  
  return (
    <button onClick={() => selectCheckbox(questionID, answerID)} value={label} className='group trans-bg bg-blue-006 dark:bg-white-003 mt-2 block py-[10px] pl-4 pr-[30px] rounded-xl cursor-pointer'>
      {checked ? 
      (<div className='transition-bg duration-300 bg-blue-1 dark:bg-blue-1 shadow-shine w-[10px] h-[10px] mr-4 inline-block rounded-sm'></div>) : 
      (<div className='transition-bg duration-300 bg-light-text-2 dark:bg-black-02 w-[10px] h-[10px] mr-4 inline-block  rounded-sm'></div>)
      }
      <span className='transition-text text-light-text-2 dark:text-grey-6 group-hover:text-light-text-1 dark:group-hover:text-grey-7'>{label}</span>
    </button>
  );
};

Checkbox.propTypes = {
  label: propTypes.string,
  selectCheckbox: propTypes.func,
  questionID: propTypes.number,
  answerID: propTypes.number,
  checked: propTypes.bool
}

export default Checkbox;