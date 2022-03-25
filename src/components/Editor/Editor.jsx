import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestionAC } from '../../redux/actions';
import AddQuestionBtn from './AddQuestionBtn/AddQuestionBtn';
import EditCheckbox from './EditCheckbox/EditCheckbox';

const Editor = () => {
  const state = useSelector(state => state.editor);
  const dispatch = useDispatch();
  const questionnaire = state.questionnaire;

  const addQuestion = (kind) => {
    dispatch(addQuestionAC(kind));
  }

  return (
    <div className='w-full flex flex-col items-center'>
      {questionnaire.questions.map((question, index) => (<EditCheckbox key={index}/>))}
      <EditCheckbox/>
      <AddQuestionBtn addQuestion={addQuestion}></AddQuestionBtn>
    </div>
  );
};

export default Editor;