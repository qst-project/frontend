import React from 'react';
import Radio from '../../UI/Radio/Radio';

const QuestRadio = (props) => {
  return (
    <div className='shadow-box mb-10 p-[36px] bg-gradient-to-br from-grey-3 to-grey-2 rounded-[33px]'>
      <h3 className='text-base text-grey-8 mb-[25px]'>{props.question.question}</h3>
      {props.question.answers.map(answer => (<Radio name={props.question.key} label={answer}/>))}
    </div>
  );
};

export default QuestRadio;