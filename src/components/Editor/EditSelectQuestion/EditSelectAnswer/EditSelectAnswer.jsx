import React, { useEffect, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {ReactComponent as RemoveIcon} from '../../../../icons/remove.svg';

const EditSelectAnswer = ({answer, questionID, answerID, setAnswer, removeAnswer, type}) => {
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
          className='py-2.5 pl-12 pr-4 bg-light-highlight text-sm text-light-text-1 resize-none focus:outline focus:outline-1 focus:outline-light-text-1'/>
        <div className='absolute pointer-events-none top-[-3px] left-4 flex items-center h-full'>
          <div ref={bulb} className='w-2.5 h-2.5 bg-light-text-2 absolute'></div>
        </div>
      </div>
      
      {/* REMOVE BUTTON */}
      <button ref={removeBtn} onClick={() => removeAnswer(questionID, answerID)} data-tip='Remove answer' data-for='global-tip' 
      className='group opacity-0 transition-opacity duration-300 p-2 self-center bg-light-highlight rounded-xl ml-2'>
        <RemoveIcon className='fill-light-text-2 group-hover:fill-light-text-1 w-6 h-6'/>
      </button>
    </div>
  );
};

export default EditSelectAnswer;