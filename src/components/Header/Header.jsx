import React from 'react';
import ProfileBtn from './ProfileBtn';
import ThemeBtn from './ThemeBtn';

export default () => {
  return (
    <div data-cy="Header" className='relative w-full'>
      <div className='absolute trans-dark w-full h-full bg-gradient-to-r from-dark-header-1 to-dark-header-2 shadow-header'></div>
      <div className='container mx-auto py-3 flex flex-row-reverse'>
        <ThemeBtn/>
        <ProfileBtn/>
      </div>
    </div>
  );
};