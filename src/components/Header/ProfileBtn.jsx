import React from 'react';

const ProfileBtn = () => {
  return (
    <button className='group relative pl-4 ml-4 flex items-center'>
      <div className='absolute transition-wbg dark:bg-blue-028 right-0 bg-white-008 rounded-full w-[30px] h-[30px] duration-300 group-hover:w-full'></div>
      <p className='text-grey-8 trans-text dark:text-white z-10 mr-3'>Profile</p>
      <svg className='z-10 mr-[5px] stroke-grey-1' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.87731 18.5982C6.96275 18.5982 4.47375 18.1173 4.47375 16.1914C4.47375 14.2656 6.94696 12.4876 9.87731 12.4876C12.792 12.4876 15.2809 14.2483 15.2809 16.1742C15.2809 18.0993 12.8078 18.5982 9.87731 18.5982Z" stroke="#DCDCDC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.87157 9.81881C11.7843 9.81881 13.3345 8.17514 13.3345 6.14717C13.3345 4.11918 11.7843 2.47472 9.87157 2.47472C7.95893 2.47472 6.40798 4.11918 6.40798 6.14717C6.40152 8.1683 7.941 9.81203 9.84718 9.81881C9.85579 9.81881 9.86368 9.81881 9.87157 9.81881Z" stroke="#DCDCDC" strokeWidth="1.5" strokeLinecap="round" inejoin="round"/>
      </svg>
    </button>
  );
};

export default ProfileBtn;