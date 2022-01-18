import React from 'react';
import BtnSubmit from '../../UI/BtnSubmit/BtnSubmit';
import QuestCheckbox from '../QuestCheckbox/QuestCheckbox';
import QuestRadio from '../QuestRadio/QuestRadio';

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
    <div className='w-full'>
      <h2 className='text-lg text-white uppercase tracking-[18px] text-center mt-[100px]'>My survey</h2>
      <div className='mt-[100px]'>
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