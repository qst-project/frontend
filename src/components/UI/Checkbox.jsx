import React from 'react';
import styles from './styles/Checkbox.module.css';

const Checkbox = (props) => {
  return (
    <div className={styles.checkbox}>
      <label>
        <input type="checkbox" name={props.name}/>
        <div className={styles.bulb}></div>
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;