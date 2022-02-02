import React from 'react';
import Checkbox from '../../UI/Checkbox/Checkbox';

const QuestCheckbox = (props) => {
  return (
    <div className=' relative shadow-box dark:shadow-light-box transition-shadow duration-700 mb-10 p-[36px] rounded-[33px]'>
      <div className=' trans-dark -z-10 w-full h-full top-0 left-0 absolute bg-gradient-to-br from-grey-3 to-grey-2 rounded-[33px]'></div>
      <div className=' trans-light -z-10 w-full h-full top-0 left-0 absolute bg-gradient-to-br from-light-box-1 to-light-box-2 rounded-[33px]'></div>
      <h3 className='text-base text-grey-8 mb-[25px] trans-text dark:text-font-blue'>{props.question.question} <span className='text-grey-4 trans-text dark:text-font-light-blue'>(several variants)</span></h3>
      <div>
        {props.question.answers.map(answer => (<Checkbox label={answer.label} checked={answer.checked}/>))}
      </div>
    </div>
  );
};

export default QuestCheckbox;