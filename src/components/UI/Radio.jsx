import React from 'react';
import styles from './styles/Radio.module.scss';

const Radio = (props) => {
  return (
    <div className={styles.radio}>
      <label>
        <input type="radio" name={props.name}/>
        <div className={styles.bulb}></div>
        {props.label}
      </label>
    </div>
  );
};

export default Radio;