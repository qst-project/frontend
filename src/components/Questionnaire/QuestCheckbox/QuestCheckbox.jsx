import React from 'react';
import Checkbox from '../../UI/Checkbox/Checkbox';

const QuestCheckbox = (props) => {
  return (
    <div className='p-px bg-gradient-box rounded-[33px] shadow-box mb-[36px]'>
      <div className='p-[36px] bg-gradient-to-br from-grey-3 to-grey-1 rounded-[33px]'>
        <h3 className='text-base text-grey-8 mb-[25px]'>{props.question.question} <span className='text-grey-4'>(several variants)</span></h3>
        <div>
          {props.question.answers.map(answer => (<Checkbox name={props.question.key} label={answer}/>))}
        </div>
      </div>
    </div>
  );
};

export default QuestCheckbox;