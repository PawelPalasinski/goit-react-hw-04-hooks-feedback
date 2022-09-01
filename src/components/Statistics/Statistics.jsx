import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ statsValues }) => {
  return (
    <div className={styles.statistics}>
      <h3>Statistics</h3>
          <ul className={styles.statisticsList}>
      
        {statsValues.map(([name, value]) => (
          <li key={name}>
            {name}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
