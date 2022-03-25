import React from 'react';
import {ReactComponent as ProfileLightIcon} from '../../icons/profile-light.svg';
import {ReactComponent as ProfileDarkIcon} from '../../icons/profile-dark.svg';

const ProfileBtn = () => {
  return (
    <button className='group relative pl-4 ml-4 flex items-center'>
      <div className='absolute transition-wbg bg-blue-028 right-0 dark:bg-white-008 rounded-full w-[30px] h-[30px] duration-300 group-hover:w-full'></div>
      <p className='trans-text text-white dark:text-grey-8 z-10 mr-[36px]'>Profile</p>
      <ProfileDarkIcon className='absolute trans-dark z-10 right-[3px] w-6 h-6'/>
      <ProfileLightIcon className='absolute trans-light z-10 right-[3px] w-6 h-6'/>
    </button>
  );
};

export default ProfileBtn;