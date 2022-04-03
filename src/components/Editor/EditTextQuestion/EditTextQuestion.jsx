import React from 'react';
import {ReactComponent as RemoveIcon} from '../../../icons/remove.svg';

const EditTextQuestion = ({question, removeQuestion, setQuestion}) => {
  return (
    <div className='my-gradient-box w-full mb-10 p-9 rounded-[33px]'>
      <div className='my-light-gradient rounded-[33px]'></div>
      <div className='my-dark-gradient rounded-[33px]'></div>
      
      {/* LABEL */}
      <div className='w-full flex'>
        <input type='text' placeholder='Your question...' value={question.question} onChange={(e) => setQuestion(question.id, e.target.value)}
        className='px-4 h-10 basis-full bg-light-highlight rounded-xl text-base text-light-text-1 focus:outline focus:outline-1 focus:outline-light-text-1'></input>
        <button onClick={() => removeQuestion(question.id)} data-tip='Remove question' data-for='global-tip' className='group p-2 bg-light-highlight rounded-xl ml-2'>
          <RemoveIcon className='fill-light-text-2 group-hover:fill-light-text-1 w-6 h-6'/>
        </button>
      </div>

      {/* QUESTION */}
      {/* <TextareaAutosize 
        value={question.answer} 
        onChange={(e) => setTextAnswer(question.id, e.target.value)} 
        placeholder="Your answer..." 
        className='w-full rounded-2xl p-4 bg-light-highlight text-sm text-light-text-1 resize-none focus:outline focus:outline-1 focus:outline-light-text-1'/> */}
    </div>
  );
};

export default EditTextQuestion;