import React from 'react';
import styles from './Radio.module.scss';

// const Radio = (props) => {
//   return (
//     <div className='p-px bg-gradient-button rounded-full'>
//       <label className='p-[10px] bg-gradient-to-br from-grey-3 to-grey-2 block rounded-full bg-white-003'>
//         <input className='hidden' type="radio" name={props.name}/>
//         <div className={styles.bulb}></div>
//         {props.label}
//       </label>
//     </div>
//   );
// };

const Radio = (props) => {
  return (
    <div>
      <label className='text-grey-6 mb-[5px] inline-block py-[10px] pl-4 pr-[30px] bg-white-003 rounded-full cursor-pointer hover:text-grey-7 transition-text'>
        <input className='hidden' type="radio" name={props.name}/>
        <div className='w-[10px] h-[10px] mr-4 inline-block bg-black-02 rounded-full'></div>
        {props.label}
      </label>
    </div>
  );
};

export default Radio;