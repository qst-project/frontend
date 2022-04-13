import React from 'react';
import RadioAnswer from './RadioAnswer/RadioAnswer';
import propTypes from 'prop-types';

const RadioQuestion = ({question, selectRadio, questionID}) => {
  return (
    <div className='my-gradient-box w-full mb-10 p-9 rounded-[33px]'>
      <div className='my-light-gradient rounded-[33px]'></div>
      <div className='my-dark-gradient rounded-[33px]'></div>
      <h3 className='my-text-base mb-6'>{question.question}</h3>
      {question.answers.map((answer, index) => (<RadioAnswer selectRadio={selectRadio} label={answer.label} checked={answer.checked} questionID={questionID} answerID={index} key={index}/>))}
    </div>
  );
};

RadioQuestion.propTypes = {
  question: propTypes.shape({
    type: propTypes.string,
    id: propTypes.number,
    question: propTypes.string,
    answers: propTypes.array
  }),
  selectRadio: propTypes.func,
  questionID: propTypes.number
}

export default RadioQuestion;