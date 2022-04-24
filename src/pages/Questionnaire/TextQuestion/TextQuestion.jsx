import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default ({question, setTextAnswer}) => {
  return (
    <div className='my-gradient-box w-full mb-10 p-9 rounded-[33px]'>
      <div className='my-light-gradient rounded-[33px]'></div>
      <div className='my-dark-gradient rounded-[33px]'></div>
      
      {/* LABEL */}
      <h3 className='my-text-base mb-6'>{question.question}</h3>

      {/* QUESTION */}
      <TextareaAutosize 
        value={question.answer} 
        onChange={(e) => setTextAnswer(question.id, e.target.value)} 
        placeholder="Your answer..." 
        className='my-textarea w-full rounded-2xl py-3 px-6 resize-none'/>
    </div>
  );
};