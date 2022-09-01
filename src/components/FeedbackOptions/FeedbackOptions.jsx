import React from 'react';
import { useState } from 'react';

import styles from './FeedbackOptions.module.css';

import Statistics from '.././Statistics/Statistics';
import Notification from '.././Notification/Notification';

export const FeedbackOptions = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countVotes = () => good + neutral + bad;
  const positivePercentage = Math.round((good / countVotes()) * 100);

  const statsValues = [["Good", good], ["Neutral", neutral], ["Bad", bad], ["Total: ", good+neutral+bad], ["Positive feedback", `${positivePercentage}%`]]

  return (
    <div className={styles.feedbackContainer}>
      <h3 className="vote-container__title">Please leave feedback</h3>
      <div className={styles.btnContainer}>
      <button
        className={styles.optionBtn}
        onClick={() => {
          setGood(good + 1);
        }}
      >
        😊
      </button>
      <button
        className={styles.optionBtn}
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      >
        😑
      </button>
      <button
        className={styles.optionBtn}
        onClick={() => {
          setBad(bad + 1);
        }}
      >
        😞
      </button>
</div>
      {countVotes() !== 0 ? (
        <Statistics
        statsValues={statsValues}/>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};