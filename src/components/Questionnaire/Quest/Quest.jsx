import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BtnSubmit from '../../UI/BtnSubmit/BtnSubmit';
import QuestCheckbox from '../QuestCheckbox/QuestCheckbox';
import QuestRadio from '../QuestRadio/QuestRadio';

const Quest = () => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions);

  return (
    <div className='w-full'>
      <h2 style={{textShadow: '6px 5px 10px rgba(0, 0, 0, 0.27)'}} className='text-lg text-white uppercase tracking-[18px] text-center mt-24'>My survey</h2>
      <div className=' mt-24'>
        {questions.map(question => {
          switch (question.type) {
            case 'radio':
              return <QuestRadio question={question} key={question.id}/>
            case 'checkbox':
              return <QuestCheckbox question={question} key={question.id}/>
          }
        })}
      </div>
        
      {/* <BtnSubmit>Submit</BtnSubmit> */}
    </div>
  );
};

export default Quest;