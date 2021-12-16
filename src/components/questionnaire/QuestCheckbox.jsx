import React from 'react';
import Checkbox from '../UI/Checkbox';
import styles from './styles/QuestCheckbox.module.css'

const QuestCheckbox = (props) => {
  return (
    <div className={styles.main}>
      <h3>{props.question.question}</h3>
      {props.question.answers.map(answer => (<Checkbox name={props.question.key} label={answer}/>))}
    </div>
  );
};

export default QuestCheckbox;