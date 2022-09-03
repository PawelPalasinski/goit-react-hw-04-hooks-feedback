import React from 'react';
import styles from './Options.module.css';

const Options = ({
  goodIncrement,
  neutralIncrement,
  badIncrement,
}) => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.optionBtn} onClick={goodIncrement}>
        😊
      </button>
      <button className={styles.optionBtn} onClick={neutralIncrement}>
        😑
      </button>
      <button className={styles.optionBtn} onClick={badIncrement}>
        😞
      </button>
    </div>
  );
}

export default Options;