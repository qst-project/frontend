import React from 'react';
import styles from './styles/BtnSubmit.module.scss';

const BtnSubmit = (props) => {
  return (
    <button className={styles.btnSubmit}>
      {props.children}
    </button>
  );
};

export default BtnSubmit;