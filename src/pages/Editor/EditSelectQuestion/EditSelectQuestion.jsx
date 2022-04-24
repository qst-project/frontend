import React, { useEffect } from 'react';
import EditSelectAnswer from './EditSelectAnswer';
import {ReactComponent as PlusIcon} from '@icons/plus.svg';
import {ReactComponent as RemoveIcon} from '@icons/remove.svg';
import ReactTooltip from 'react-tooltip';

export default ({question, addAnswer, setQuestion, setAnswer, removeQuestion, removeAnswer}) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  })

  return (
    <div className='my-gradient-box w-full mb-10 p-9 rounded-[33px]'>
      <div className='my-light-gradient rounded-[33px]'></div>
      <div className='my-dark-gradient rounded-[33px]'></div>

      {/* QUESTION LABEL */}
      <div className='mb-6 w-full flex'>
        <input data-cy="QuestionTitle" type='text' placeholder='Your question...' value={question.question} onChange={(e) => setQuestion(question.id, e.target.value)}
        className='px-4 h-10 basis-full my-textarea rounded-xl'></input>
        {/* REMOVE BUTTON */}
        <button data-cy="DeleteQuestionBtn" onClick={() => removeQuestion(question.id)} data-tip='Remove question' data-for='global-tip' 
        className='group p-2 my-highlight rounded-xl ml-2'>
          <RemoveIcon className='my-icon w-6 h-6'/>
        </button>
      </div>
      
      {/* ANSWERS */}
      <div className='flex flex-col items-start'>
        {question.answers.map((answer, index) => (<EditSelectAnswer 
          setAnswer={setAnswer} 
          removeAnswer={removeAnswer} 
          key={index} 
          questionID={question.id} 
          answerID={index} 
          answer={answer}
          type={question.type}/>))}
        <button data-cy="AddAnswerBtn" onClick={() => addAnswer(question.id)} data-tip='Add new answer' data-for='global-tip' 
        className='my-highlight group p-2 rounded-xl'>
          <PlusIcon className='my-icon w-6 h-6'></PlusIcon>
        </button>
      </div>
    </div>
  );
};