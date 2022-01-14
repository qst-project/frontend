import React from 'react';
import Checkbox from '../../UI/Checkbox/Checkbox';

const QuestCheckbox = (props) => {
  return (
    <div>
      <h3>{props.question.question}</h3>
      {props.question.answers.map(answer => (<Checkbox name={props.question.key} label={answer}/>))}
    </div>
  );
};

export default QuestCheckbox;