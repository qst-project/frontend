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
        className='px-4 h-10 basis-full my-textarea rounded-xl'></input>
        <button onClick={() => removeQuestion(question.id)} data-tip='Remove question' data-for='global-tip' className='group p-2 my-highlight rounded-xl ml-2'>
          <RemoveIcon className='my-icon w-6 h-6'/>
        </button>
      </div>
    </div>
  );
};

export default EditTextQuestion;