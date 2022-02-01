import React from 'react';

const BtnSubmit = (props) => {
  return (
    <button className='bg-gradient-to-br from-grey-3 to-grey-1 shadow-box mt-2 px-16 py-5 rounded-full text-base text-grey-8'>
      {props.children}
    </button>
  );
};

export default BtnSubmit;