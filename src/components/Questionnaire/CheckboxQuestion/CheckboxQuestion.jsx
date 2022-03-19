import React from 'react';
import Checkbox from '../../UI/Checkbox/Checkbox';
import propTypes from 'prop-types';

const CheckboxQuestion = ({question, selectCheckbox, questionID}) => {
  return (
    <div className='my-gradient-box w-full mb-10 p-9 rounded-[33px]'>
      <div className='my-light-gradient rounded-[33px]'></div>
      <div className='my-dark-gradient rounded-[33px]'></div>
      <h3 className='text-base mb-6 trans-text text-light-text-1 dark:text-grey-8'>{question.question} <span className='trans-text text-light-text-2 dark:text-grey-4'>(several variants)</span></h3>
      {question.answers.map((answer, index) => (<Checkbox selectCheckbox={selectCheckbox} label={answer.label} checked={answer.checked} questionID={questionID} answerID={index} key={index}/>))}
    </div>
  );
};

CheckboxQuestion.propTypes = {
  question: propTypes.shape({
    type: propTypes.string,
    id: propTypes.number,
    question: propTypes.string,
    answers: propTypes.array
  }),
  selectCheckbox: propTypes.func,
  questionID: propTypes.number
}

export default CheckboxQuestion;