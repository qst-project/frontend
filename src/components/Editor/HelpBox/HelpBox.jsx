import React from 'react';
import {ReactComponent as ArrowIcon} from '../../../icons/arrow.svg';

const HelpBox = ({children}) => {
  return (
    <div className='flex flex-col items-center'>
      <ArrowIcon className='w-6 fill-light-help-bg'/>
      <div className=' w-48 bg-light-help-bg text-xs text-light-text-1 p-[18px] rounded-2xl'>{children}</div>
    </div>
  );
};

export default HelpBox;