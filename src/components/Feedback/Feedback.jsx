import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { StatisticsBox } from '../Statistics/Statistics';
import { SectionBox } from 'components/Section/Section';
import { FeedbackOptionsBox } from '../FeedbackOptions/FeedbackOptions';

const options = Object.freeze({
  good: 'Good',
  neutral: 'Neutral',
  bad: 'Bad',
});

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    if (option === options.good) {
      setGood(prev => prev + 1);
      return;
    }
    if (option === options.neutral) {
      setNeutral(prev => prev + 1);
      return;
    }
    if (option === options.bad) {
      setBad(prev => prev + 1);
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return Math.floor((good / total) * 100) || 0;
  };

  const total = good + neutral + bad;
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <SectionBox title="Please leave feedback">
        <FeedbackOptionsBox
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </SectionBox>
      <SectionBox title="Statistics">
        <StatisticsBox
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </SectionBox>
    </div>
  );
};

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
