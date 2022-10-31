import React from 'react';
import { useState } from 'react';

import styles from './Feedback.module.css';

import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import Options from '../Options/Options';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countVotes = () => good + neutral + bad;
  const positivePercentage = Math.round((good / countVotes()) * 100);

  const statsValues = [
    ['Good', good],
    ['Neutral', neutral],
    ['Bad', bad],
    ['Total', good + neutral + bad],
    ['Positive feedback', `${positivePercentage}%`],
  ];

  const goodIncrement = () => {
    setGood(good + 1);
  };

  const neutralIncrement = () => {
    setNeutral(neutral + 1);
  };

  const badIncrement = () => {
    setBad(bad + 1);
  };

  return (
    <div className={styles.feedbackContainer}>
      <h3 className="vote-container__title">Please leave feedback</h3>
      <Options
        goodIncrement={goodIncrement}
        neutralIncrement={neutralIncrement}
        badIncrement={badIncrement}
      />
      {countVotes() !== 0 ? (
        <Statistics statsValues={statsValues} />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
