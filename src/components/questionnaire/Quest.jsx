import React from 'react';
import QuestCheckbox from './QuestCheckbox';
import QuestRadio from './QuestRadio';
import styles from './styles/Quest.module.scss';

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
  }
]

const Quest = () => {
  return (
    <div className={styles.main}>
      <h2>My survey</h2>
      {questions.map(question => {
        switch (question.type) {
          case 'radio':
            return <QuestRadio question={question}/>
          case 'checkbox':
            return <QuestCheckbox question={question}/>
        }
      })}
    </div>
  );
};

export default Quest;