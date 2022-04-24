import React, { useEffect, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import {ReactComponent as RemoveIcon} from '@icons/remove.svg';

export default ({answer, questionID, answerID, setAnswer, removeAnswer, type}) => {
  const removeBtn = useRef();
  const textArea = useRef();
  const bulb = useRef();

  useEffect(() => {
    switch (type) {
      case 'checkbox':
        textArea.current.classList.add('rounded-xl');
        bulb.current.classList.add('rounded-sm');
      case 'radio':
        textArea.current.classList.add('rounded-full');
        bulb.current.classList.add('rounded-full');
    }
  }, [])

  const showRemoveBtn = () => {
    removeBtn.current.style.opacity = '1';
  }

  const hideRemoveBtn = () => {
    removeBtn.current.style.opacity = '0';
  }
 
  return (
    <div className='flex' onMouseEnter={showRemoveBtn} onMouseLeave={hideRemoveBtn}>
      {/* TEXTAREA */}
      <div className='relative mt-1'>
        <TextareaAutosize 
          ref={textArea}
          value={answer.label} 
          onChange={(e) => setAnswer(questionID, answerID, e.target.value)} 
          placeholder="Your answer..." 
          className='my-textarea py-2.5 pl-12 pr-4 resize-none'/>
        <div className='absolute pointer-events-none top-[-3px] left-4 flex items-center h-full'>
          <div ref={bulb} className='w-2.5 h-2.5 trans-bg bg-light-text-2 dark:bg-dark-text-3 absolute'></div>
        </div>
      </div>
      
      {/* REMOVE BUTTON */}
      <div ref={removeBtn} className='flex items-center opacity-0 transition-opacity duration-300 ml-2'>
        <button onClick={() => removeAnswer(questionID, answerID)} data-tip='Remove answer' data-for='global-tip' 
        className='group -mt-1 p-2 self-center my-highlight rounded-xl'>
          <RemoveIcon className='my-icon w-6 h-6'/>
        </button>
      </div>
    </div>
  );
};