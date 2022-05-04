import React from 'react';
import {ReactComponent as SunIcon} from '@icons/sun.svg';
import {ReactComponent as MoonIcon} from '@icons/moon.svg';

export default () => {
  let changeTheme = () => {
    let cls = document.querySelector('html').classList;
    cls.toggle('dark');
  }

  return (
    <button data-cy="ThemeBtn" onClick={changeTheme} className='group relative pl-4 ml-6 flex items-center'>
      <div className='absolute right-0  transition-wbg bg-light-headerbtn dark:bg-dark-headerbtn rounded-full 
      w-[30px] h-[30px] duration-300 group-hover:w-full'></div>
      <p className='my-text-xs text-white dark:text-dark-text-1 z-10 mr-[36px]'>Theme</p>
      <MoonIcon data-cy="MoonIcon" className='absolute trans-dark z-10 right-[5px] w-[18px] h-[18px] fill-dark-text-1'/>
      <SunIcon data-cy="SunIcon" className='absolute trans-light z-10 right-[5px] w-5 h-5 fill-white'/>
    </button>
  );
};