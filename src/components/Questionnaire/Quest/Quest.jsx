import React from 'react';
import BtnSubmit from '../../UI/BtnSubmit/BtnSubmit';
import QuestCheckbox from '../QuestCheckbox/QuestCheckbox';
import QuestRadio from '../QuestRadio/QuestRadio';
import styles from './Quest.module.scss';

let questions = [
  {
    type: 'radio',
    key: '1',
    question: 'How did you find out about the vacancy of our Company?',
    answers: [
      'Company website',
      'HeadHunter',
      'From friends',
      'Other'
    ]
  },

  {
    type: 'checkbox',
    key: '2',
    question: 'What did you like our company?',
    answers: [
      'Salary',
      'Working conditions',
      'Opportunity for career growth'
    ]
  },
]

const Quest = () => {
  return (
    <div className={styles.main}>
      <h2>My survey</h2>
      <div className={styles.questions}>
        {questions.map(question => {
          switch (question.type) {
            case 'radio':
              return <QuestRadio question={question}/>
            case 'checkbox':
              return <QuestCheckbox question={question}/>
          }
        })}
      </div>
        
      <BtnSubmit>Submit</BtnSubmit>
    </div>
  );
};

export default Quest;