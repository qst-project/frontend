import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const TextQuestion = ({question, setTextAnswer}) => {
  return (
    <div className='my-gradient-box w-full mb-10 p-9 rounded-[33px]'>
      <div className='my-light-gradient rounded-[33px]'></div>
      <div className='my-dark-gradient rounded-[33px]'></div>
      
      {/* LABEL */}
      <h3 className='text-base mb-6 trans-text text-light-text-1 dark:text-grey-8'>{question.question}</h3>

      {/* QUESTION */}
      <TextareaAutosize 
        value={question.answer} 
        onChange={(e) => setTextAnswer(question.id, e.target.value)} 
        placeholder="Your answer..." 
        className='w-full rounded-2xl p-4 bg-light-highlight text-sm text-light-text-1 resize-none focus:outline focus:outline-1 focus:outline-light-text-1'/>
    </div>
  );
};

export default TextQuestion;