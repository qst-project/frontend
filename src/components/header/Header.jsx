import React from 'react';
import styles from './styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}><h1>Qe</h1></div>
      <div className={styles.profile}><p>Profile</p></div>
    </div>
  );
};

export default Header;