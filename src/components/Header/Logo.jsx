import React from 'react';
import { ReactComponent as DarkLogoIcon } from '@icons/logo-dark.svg';
import { ReactComponent as WhiteLogoIcon } from '@icons/logo-white.svg';

export default () => {
    return (
        <div className='box-border relative flex justify-start items-center w-full h-full' >
            <DarkLogoIcon className='relaive trans-light z-10 w-8 h-8' />
            <WhiteLogoIcon className='absolute trans-dark z-10 left-[10px] w-8 h-8' />
            <p style={{ textShadow: '6px 5px 10px rgba(0, 0, 0, 0.27)' }} className='my-text-lg dark:text-dark-text-1 z-10'>Questionnaire</p>
        </div>
    );
};