import React, { useEffect, useRef } from 'react';
import {ReactComponent as PlusIcon} from '../../../icons/plus.svg';
import {ReactComponent as RadioIcon} from '../../../icons/radio.svg';
import {ReactComponent as CheckboxIcon} from '../../../icons/checkbox.svg';
import {ReactComponent as TextIcon} from '../../../icons/text.svg';
import HelpBox from '../HelpBox/HelpBox';

const AddQuestionBtn = ({addQuestion}) => {
  const btnBg = useRef();
  const btn = useRef();
  const plus = useRef();
  let wrapTimeOut;
  let helpTiomeOut;
  let icons = [];

  useEffect(() => {
    btn.current.style.height = '72px';
    btn.current.style.width = '252px';
    icons = btn.current.children;
    for (let icon of icons) {
      icon.onmouseenter = e => showHelp(e);
      icon.onmouseleave = e => closeHelp(e);
    }
  });

  const unwrapBtn = () => {
    clearTimeout(wrapTimeOut);
    plus.current.style.opacity = '0'
    plus.current.style.visibility = 'hidden';
    btn.current.style.display = 'flex';
    console.log(icons);
    for (let icon of icons) {
      console.log(icon.style.opacity);
      setTimeout(() => icon.firstChild.style.opacity = '1', 10);
    }
  }

  const wrapBtn = () => {
    for (let icon of icons) {
      icon.firstChild.style.opacity = '0';
    }
    wrapTimeOut = setTimeout(() => {
      btn.current.style.display = 'none';
      plus.current.style.visibility = 'visible';
      plus.current.style.opacity = '1';
    }, 200);
  }

  const showHelp = (e) => {
    helpTiomeOut = setTimeout(() => {
      e.target.lastChild.style.visibility = 'visible';
      e.target.lastChild.style.opacity = '1';
    }, 300)
  }

  const closeHelp = (e) => {
    clearTimeout(helpTiomeOut);
    e.target.lastChild.style.visibility = 'hidden';
    e.target.lastChild.style.opacity = '0';
  }

  return (
    <div className='mb-48'>
      <div onMouseEnter={unwrapBtn} onMouseLeave={wrapBtn} ref={btnBg} className='flex justify-center mx-auto my-gradient-box 
      w-[72px] h-[72px] rounded-3xl hover:w-[252px] cursor-pointer transition-w duration-500 group'>
        <div className='my-light-gradient rounded-3xl'></div>
        <div className='my-dark-gradient rounded-3xl'></div>
        <PlusIcon ref={plus} className='fill-light-text-2 w-9 h-9 mt-[18px] transition-opacity duration-500'/>
        <div ref={btn} className='hidden justify-around pt-[18px] overflow-visible absolute'>



          <div className='w-9 h-9 ml-[18px]'>
            <button onClick={() => addQuestion('text')} className='w-full h-full fill-light-text-2 hover:fill-light-text-1 opacity-0 transition-opacity duration-500'>
              <TextIcon className='w-full h-full'/>
            </button>
            <div className='invisible opacity-0 transition-opacity duration-500 pointer-events-none'>
              <HelpBox>Text (user can write a text answer to the question)</HelpBox>
            </div>
          </div>

          <div className='w-9 h-9'>
            <button onClick={() => addQuestion('radio')} className='w-full h-full fill-light-text-2 hover:fill-light-text-1 opacity-0 transition-opacity duration-500'>
              <RadioIcon className='w-full h-full'/>
            </button>
            <div className='invisible opacity-0 transition-opacity duration-500 pointer-events-none'>
              <HelpBox>Radio (user can only select one answer from those presented)</HelpBox>
            </div>
          </div>

          <div className='w-9 h-9 mr-[18px]'>
            <button onClick={() => addQuestion('checkbox')} className='w-full h-full fill-light-text-2 hover:fill-light-text-1 opacity-0 transition-opacity duration-500'>
              <CheckboxIcon className='w-full h-full'/>
            </button>
            <div className='invisible opacity-0 transition-opacity duration-500 pointer-events-none'>
              <HelpBox>Checkbox (user can select multiple answers from those presented)</HelpBox>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddQuestionBtn;