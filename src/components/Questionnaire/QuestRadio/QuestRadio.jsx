import React from 'react';
import Radio from '../../UI/Radio/Radio';
import styles from './QuestRadio.module.scss'

const QuestRadio = (props) => {
  return (
    <div className={styles.main}>
      <h3>{props.question.question}</h3>
      {props.question.answers.map(answer => (<Radio name={props.question.key} label={answer}/>))}
    </div>
  );
};

export default QuestRadio;