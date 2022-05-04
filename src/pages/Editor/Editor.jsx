import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';

import {
  addAnswerAC,
  addQuestionAC,
  changeQuestionsOrderAC,
  removeAnswerAC,
  removeQuestionAC,
  setAnswerAC,
  setQuestionAC
} from '@actions/editor';

import AddQuestionBtn from './AddQuestionBtn/AddQuestionBtn';
import EditSelectQuestion from './EditSelectQuestion/EditSelectQuestion';
import EditTextQuestion from './EditTextQuestion/EditTextQuestion';

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

  const setQuestion = (questionID, value) => {
    dispatch(setQuestionAC(questionID, value));
  }

  const setAnswer = (questionID, answerID, value) => {
    dispatch(setAnswerAC(questionID, answerID, value));
  }

  const removeQuestion = (questionID) => {
    dispatch(removeQuestionAC(questionID));
  }

  const removeAnswer = (questionID, answerID) => {
    dispatch(removeAnswerAC(questionID, answerID));
  }

  const changeQuestionsOrder = (sourceID, destinationID) => {
    dispatch(changeQuestionsOrderAC(sourceID, destinationID))
  }

  const dragHandler = (res) => {
    if (res.source && res.destination) {
      if (res.source.index !== res.destination.index) changeQuestionsOrder(res.source.index, res.destination.index);
    }
  }

  return (
    <div className='w-full flex flex-col items-center'>
      {/* QUESTIONS LIST */}
      <DragDropContext onDragEnd={dragHandler}>
        <Droppable droppableId='questions'>
          {(provided) => (
            <div className='w-full flex flex-col items-center' {...provided.droppableProps} ref={provided.innerRef}>
              {questionnaire.questions.map((question, index) => (
                <Draggable key={question.id} draggableId={question.id + ''} index={index}>
                  {(provided) => {
                    switch (question.type) {
                      case 'checkbox':
                        return (
                          <div className='w-full' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <EditSelectQuestion
                              question={question}
                              addAnswer={addAnswer}
                              setQuestion={setQuestion}
                              setAnswer={setAnswer}
                              removeQuestion={removeQuestion}
                              removeAnswer={removeAnswer} />
                          </div>)
                      case 'radio':
                        return (
                          <div className='w-full' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <EditSelectQuestion
                              question={question}
                              addAnswer={addAnswer}
                              setQuestion={setQuestion}
                              setAnswer={setAnswer}
                              removeQuestion={removeQuestion}
                              removeAnswer={removeAnswer} />
                          </div>)
                      case 'text':
                        return (
                          <div className='w-full' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <EditTextQuestion
                              question={question}
                              setQuestion={setQuestion}
                              removeQuestion={removeQuestion} />
                          </div>)
                    }
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* ADD QUESTION BUTTON */}
      <AddQuestionBtn addQuestion={addQuestion}></AddQuestionBtn>
    </div>
  );
};

export default Editor;