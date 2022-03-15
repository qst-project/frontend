import React from 'react';
import Radio from '../../UI/Radio/Radio';

const RadioQuestion = ({question, selectRadio, questionID}) => {
  return (
    <div className='relative shadow-light-box dark:shadow-box transition-shadow duration-700 mb-10 p-[36px] rounded-[33px]'>
      <div className='trans-light -z-10 w-full h-full top-0 left-0 absolute bg-gradient-to-br from-light-box-1 to-light-box-2 rounded-[33px]'></div>
      <div className='trans-dark -z-10 w-full h-full top-0 left-0 absolute bg-gradient-to-br from-grey-3 to-grey-2 rounded-[33px]'></div>
      <h3 className='text-base mb-[25px] trans-text text-light-text-1 dark:text-grey-8'>{question.question}</h3>
      {question.answers.map((answer, index) => (<Radio selectRadio={selectRadio} label={answer.label} checked={answer.checked} questionID={questionID} answerID={index}/>))}
    </div>
  );
};

export default RadioQuestion;