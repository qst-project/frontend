import React from 'react';
import Radio from '../../UI/Radio/Radio';

const QuestRadio = (props) => {
  return (
    <div className='p-px bg-gradient-box rounded-[33px] shadow-box mb-[36px]'>
      <div className='p-[36px] bg-gradient-to-br from-grey-3 to-grey-1 rounded-[33px] last:mb-0'>
        <h3 className='text-base text-grey-8 mb-[25px]'>{props.question.question}</h3>
        {props.question.answers.map(answer => (<Radio name={props.question.key} label={answer}/>))}
      </div>
    </div>
  );
};

export default QuestRadio;