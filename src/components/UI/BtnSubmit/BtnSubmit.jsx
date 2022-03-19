import React from 'react';
import propTypes from 'prop-types';

const BtnSubmit = ({children, onClick}) => {
  return (
    <button onClick={onClick} className='mb-8 bg-gradient-to-r from-light-box-1 to-light-box-2 shadow-light-box px-16 py-5 rounded-full text-base text-light-text-1'>
      {children}
    </button>
  );
};

BtnSubmit.propTypes = {
  children: propTypes.string,
  onClick: propTypes.func
}

export default BtnSubmit;