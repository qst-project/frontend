import React from 'react';
import propTypes from 'prop-types';

const CheckboxAnswer = ({label, selectCheckbox, questionID, answerID, checked}) => {
  
  return (
    <button data-cy="CheckboxAnswer"  onClick={() => selectCheckbox(questionID, answerID)} value={label} className='group trans-bg bg-light-highlight dark:bg-dark-highlight mt-2 block py-[10px] pl-4 pr-[30px] rounded-xl cursor-pointer'>
      {checked ? 
      (<div className='transition-bg duration-300 bg-blue-1 dark:bg-blue-1 shadow-shine w-[10px] h-[10px] mr-4 inline-block rounded-sm'></div>) : 
      (<div className='transition-bg duration-300 bg-light-text-2 dark:bg-black-02 w-[10px] h-[10px] mr-4 inline-block  rounded-sm'></div>)
      }
      <span className='my-text-sm group-hover:text-light-text-1 dark:group-hover:text-dark-text-1 group-hover:duration-300'>{label}</span>
    </button>
  );
};

CheckboxAnswer.propTypes = {
  label: propTypes.string,
  selectCheckbox: propTypes.func,
  questionID: propTypes.number,
  answerID: propTypes.number,
  checked: propTypes.bool
}

export default CheckboxAnswer;