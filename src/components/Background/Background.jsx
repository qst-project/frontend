import React from 'react';

const Background = () => {
  return (
    <div>
      <div className=' trans-dark -z-10 fixed object-left-bottom w-full h-screen bg-gradient-to-r from-grey-4 to-grey-2'></div>
      <div className=' trans-light -z-10 fixed object-left-bottom w-full h-screen bg-gradient-to-r from-light-bg-1 to-light-bg-2'></div>
    </div>
    
  );
};

export default Background;