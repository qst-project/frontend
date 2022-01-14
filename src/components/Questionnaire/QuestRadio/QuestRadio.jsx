import React from 'react';
import Radio from '../../UI/Radio/Radio';

const QuestRadio = (props) => {
  return (
    <div>
      <h3>{props.question.question}</h3>
      {props.question.answers.map(answer => (<Radio name={props.question.key} label={answer}/>))}
    </div>
  );
};

export default QuestRadio;