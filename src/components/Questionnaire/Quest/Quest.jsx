import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectCheckboxAC, selectRadioAC } from '../../../redux/actions';
import BtnSubmit from '../../UI/BtnSubmit/BtnSubmit';
import QuestCheckbox from '../QuestCheckbox/QuestCheckbox';
import QuestRadio from '../QuestRadio/QuestRadio';

const Quest = ({questions, selectCheckbox, selectRadio}) => {

  return (
    <div className='w-full flex flex-col items-center'>
      <h2 style={{textShadow: '6px 5px 10px rgba(0, 0, 0, 0.27)'}} className='text-lg text-white uppercase tracking-[18px] text-center mt-24'>My survey</h2>
      <div className='w-full mt-24'>
        {questions.map(question => {
          switch (question.type) {
            case 'radio':
              return <QuestRadio selectRadio={selectRadio} question={question} questionID={question.id} key={question.id}/>
            case 'checkbox':
              return <QuestCheckbox selectCheckbox={selectCheckbox} question={question} questionID={question.id} key={question.id}/>
          }
        })}
      </div>
        
      <BtnSubmit>Submit</BtnSubmit>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    questions: state.questionnaire.questions
  }
}

const mapDispatchToProps = {
  selectCheckbox: selectCheckboxAC,
  selectRadio: selectRadioAC
}

export default connect(mapStateToProps, mapDispatchToProps)(Quest);