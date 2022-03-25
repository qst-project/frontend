import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const EditCheckboxAnswer = () => {
  return (
    <div className='relative mt-1'>
      <TextareaAutosize placeholder="Your answer..." className='py-2.5 pl-12 pr-4 bg-blue-006 rounded-xl text-sm text-light-text-2 resize-none focus:outline focus:outline-1 focus:outline-light-text-1'/>
      <div className='absolute pointer-events-none top-[-3px] left-4 flex items-center h-full'>
        <div className='w-2.5 h-2.5 bg-light-text-2 rounded-sm absolute'></div>
      </div>
    </div>
  );
};

export default EditCheckboxAnswer;