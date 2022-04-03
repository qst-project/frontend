import React, { useEffect } from 'react';
import EditSelectAnswer from './EditSelectAnswer/EditSelectAnswer';
import {ReactComponent as PlusIcon} from '../../../icons/plus.svg';
import {ReactComponent as RemoveIcon} from '../../../icons/remove.svg';
import ReactTooltip from 'react-tooltip';

const EditSelectQuestion = ({question, addAnswer, setQuestion, setAnswer, removeQuestion, removeAnswer}) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  })

  return (
    <div className='my-gradient-box w-full mb-10 p-9 rounded-[33px]'>
      <div className='my-light-gradient rounded-[33px]'></div>
      <div className='my-dark-gradient rounded-[33px]'></div>

      {/* QUESTION LABEL */}
      <div className='mb-6 w-full flex'>
        <input type='text' placeholder='Your question...' value={question.question} onChange={(e) => setQuestion(question.id, e.target.value)}
        className='px-4 h-10 basis-full bg-light-highlight rounded-xl text-base text-light-text-1 focus:outline focus:outline-1 focus:outline-light-text-1'></input>
        <button onClick={() => removeQuestion(question.id)} data-tip='Remove question' data-for='global-tip' className='group p-2 bg-light-highlight rounded-xl ml-2'>
          <RemoveIcon className='fill-light-text-2 group-hover:fill-light-text-1 w-6 h-6'/>
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
        <button onClick={() => addAnswer(question.id)} data-tip='Add new answer' data-for='global-tip' className='group p-2 bg-light-highlight rounded-xl'>
          <PlusIcon className='fill-light-text-2 group-hover:fill-light-text-1 w-6 h-6'></PlusIcon>
        </button>
      </div>
    </div>
  );
};

export default EditSelectQuestion;