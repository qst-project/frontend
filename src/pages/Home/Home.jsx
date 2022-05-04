import React from 'react';
import { ReactComponent as DarkLogoIcon } from '@icons/logo-dark.svg';

export default () => {
    return (
        <div className='w-full h-fill flex flex-col items-center'>
            <DarkLogoIcon className='fixed z-10 w-[60px] h-[60px]' />
            <h2 style={{ textShadow: '6px 5px 10px rgba(0, 0, 0, 0.27)' }} className='text-lg text-white uppercase tracking-[18px] text-center mt-24'>Hello</h2>
        </div>
    )
}