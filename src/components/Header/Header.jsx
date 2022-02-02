import React from 'react';
import ProfileBtn from './ProfileBtn';
import ThemeBtn from './ThemeBtn';

const Header = () => {
  return (
    <div className='relative text-xs w-full'>
      <div className='absolute trans-dark w-full h-full bg-gradient-to-r from-grey-3 to-grey-1 shadow-header'></div>
      <div className='container mx-auto py-3 flex flex-row-reverse'>
        <ThemeBtn/>
        <ProfileBtn/>
      </div>
    </div>
  );
};

export default Header;