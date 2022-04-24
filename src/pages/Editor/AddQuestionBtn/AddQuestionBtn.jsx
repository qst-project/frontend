import React, { useEffect, useRef } from 'react';
import {ReactComponent as PlusIcon} from '@icons/plus.svg';
import {ReactComponent as RadioIcon} from '@icons/radio.svg';
import {ReactComponent as CheckboxIcon} from '@icons/checkbox.svg';
import {ReactComponent as TextIcon} from '@icons/text.svg';

export default ({addQuestion}) => {
  const btnBg = useRef();
  const btn = useRef();
  const plus = useRef();
  let wrapTimeOut;

  useEffect(() => {
    btn.current.style.height = '72px';
    btn.current.style.width = '252px';
  });

  const unwrapBtn = () => {
    clearTimeout(wrapTimeOut);
    plus.current.style.opacity = '0'
    plus.current.style.visibility = 'hidden';
    btn.current.style.display = 'flex';
    for (let icon of btn.current.children) {
      setTimeout(() => icon.firstChild.style.opacity = '1', 10);
    }
  }

  const wrapBtn = () => {
    for (let icon of btn.current.children) {
      icon.firstChild.style.opacity = '0';
    }
    wrapTimeOut = setTimeout(() => {
      btn.current.style.display = 'none';
      plus.current.style.visibility = 'visible';
      plus.current.style.opacity = '1';
    }, 200);
  }

  return (
    <div>
      <div data-cy="AddQuestionBtn" onMouseEnter={unwrapBtn} onMouseLeave={wrapBtn} ref={btnBg} className='flex justify-center mx-auto my-gradient-box 
      w-[72px] h-[72px] rounded-3xl hover:w-[252px] cursor-pointer transition-all duration-500 group'>
        <div className='my-light-gradient rounded-3xl'></div>
        <div className='my-dark-gradient rounded-3xl'></div>
        <PlusIcon ref={plus} className='fill-light-text-2 dark:fill-dark-text-2 w-9 h-9 mt-[18px] transition-all duration-500'/>
        <div ref={btn} className='hidden justify-around pt-[18px] overflow-visible absolute'>

          <div className='w-9 h-9 ml-[18px]'>
            <button data-tip='Text (user can write a text answer to the question)' data-for='add-question-tip' onClick={() => addQuestion('text')} 
            className='group w-full h-full opacity-0 transition-opacity duration-500'>
              <TextIcon className='w-full h-full fill-light-text-2 hover:fill-light-text-1 dark:fill-dark-text-2 dark:hover:fill-dark-text-1 transition-colors duration-300'/>
            </button>
          </div>

          <div className='w-9 h-9'>
            <button data-cy="AddRadioQuestionBtn" data-tip='Radio (user can only select one answer from those presented)' data-for='add-question-tip' onClick={() => addQuestion('radio')} 
            className='w-full h-full opacity-0 transition-opacity duration-500'>
              <RadioIcon className='w-full h-full fill-light-text-2 hover:fill-light-text-1 dark:fill-dark-text-2 dark:hover:fill-dark-text-1 transition-colors duration-300'/>
            </button>
          </div>

          <div className='w-9 h-9 mr-[18px]'>
            <button data-tip='Checkbox (user can select multiple answers from those presented)' data-for='add-question-tip' onClick={() => addQuestion('checkbox')} 
            className='w-full h-full opacity-0 transition-opacity duration-500'>
              <CheckboxIcon className='w-full h-full fill-light-text-2 hover:fill-light-text-1 dark:fill-dark-text-2 dark:hover:fill-dark-text-1 transition-colors duration-300'/>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
