import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswerAC, addQuestionAC } from '../../redux/actions';
import AddQuestionBtn from './AddQuestionBtn/AddQuestionBtn';
import EditCheckbox from './EditCheckbox/EditCheckbox';

const Editor = () => {
  const state = useSelector(state => state.editor);
  const dispatch = useDispatch();
  const questionnaire = state.questionnaire;

  const addQuestion = (kind) => {
    dispatch(addQuestionAC(kind));
  }

  const addAnswer = (questionID) => {
    dispatch(addAnswerAC(questionID));
  }

  return (
    <div className='w-full flex flex-col items-center'>
      {questionnaire.questions.map((question, index) => {
        switch (question.type) {
          case 'checkbox':
            return (<EditCheckbox question={question} addAnswer={addAnswer} key={index}/>);
        }
      })}
      <AddQuestionBtn addQuestion={addQuestion}></AddQuestionBtn>
    </div>
  );
};

export default Editor;