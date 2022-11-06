import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { StatisticsBox } from '../Statistics/Statistics';
import { SectionBox } from 'components/Section/Section';
import { FeedbackOptionsBox } from '../FeedbackOptions/FeedbackOptions';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedBtn, setSelectedBtn] = useState(null);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const options = Object.freeze({
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
  });

  const onLeaveFeedback = option => async () => {
    await setSelectedBtn(option);
    // console.log('selectedBtn, ', selectedBtn);
    if (selectedBtn === options.good) {
      await countGoodFeedback();
    } else if (selectedBtn === options.neutral) {
      await countNeutralFeedback();
    } else if (selectedBtn === options.bad) {
      await countBadFeedback();
    } else {
      console.log('selectedBtn, ', selectedBtn);
    }
  };

  const countGoodFeedback = async evt => {
    // await this.setState({ good: this.state.good + 1 });
    await setGood(good + 1);
    await countTotalFeedback();
    await countPositiveFeedbackPercentage();
  };

  const countNeutralFeedback = async evt => {
    // await this.setState({ neutral: this.state.neutral + 1 });
    await setNeutral(neutral + 1);
    await countTotalFeedback();
    await countPositiveFeedbackPercentage();
  };

  const countBadFeedback = async evt => {
    //  await this.setState({ bad: this.state.bad + 1 });
    await setBad(bad + 1);
    await countTotalFeedback();
    await countPositiveFeedbackPercentage();
  };

  const countTotalFeedback = state => {
    // this.setState({
    //   total: this.state.good + this.state.neutral + this.state.bad,
    // });
    setTotal(good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = state => {
    // this.setState({
    //   positivePercentage: Math.floor(
    //     (this.state.good / this.state.total) * 100
    //   ),
    // });
    setPositivePercentage(Math.floor(good / total) * 100);
  };

  // const { good, neutral, bad, total, positivePercentage, selectedBtn } =
  //   this.state;
  // const { onLeaveFeedback } = this;
  return (
    <div>
      <SectionBox title="Please leave feedback">
        <FeedbackOptionsBox
          options={options}
          onLeaveFeedback={onLeaveFeedback}
          selected={selectedBtn}
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

// const options = Object.freeze({ good: 'Good', neutral: 'Neutral', bad: 'Bad' });

// export class Feedback extends Component {
//   static propTypes = {};

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = option => async () => {
//     await this.setState({ selectedBtn: option });
//     console.log('this.state.selectedBtn, ', this.state.selectedBtn);
//     if (this.state.selectedBtn === options.good) {
//       await this.countGoodFeedback();
//     } else if (this.state.selectedBtn === options.neutral) {
//       await this.countNeutralFeedback();
//     } else if (this.state.selectedBtn === options.bad) {
//       await this.countBadFeedback();
//     } else {
//       console.log('this.state.selectedBtn, ', this.state.selectedBtn);
//     }
//   };

//   countGoodFeedback = async evt => {
//     await this.setState({ good: this.state.good + 1 });
//     await this.countTotalFeedback();
//     await this.countPositiveFeedbackPercentage();
//   };

//   countNeutralFeedback = async evt => {
//     await this.setState({ neutral: this.state.neutral + 1 });
//     await this.countTotalFeedback();
//     await this.countPositiveFeedbackPercentage();
//   };

//   countBadFeedback = async evt => {
//     await this.setState({ bad: this.state.bad + 1 });
//     await this.countTotalFeedback();
//     await this.countPositiveFeedbackPercentage();
//   };

//   countTotalFeedback = state => {
//     this.setState({
//       total: this.state.good + this.state.neutral + this.state.bad,
//     });
//   };

//   countPositiveFeedbackPercentage = state => {
//     this.setState({
//       positivePercentage: Math.floor(
//         (this.state.good / this.state.total) * 100
//       ),
//     });
//   };

//   render() {
//     const { good, neutral, bad, total, positivePercentage, selectedBtn } =
//       this.state;
//     const { onLeaveFeedback } = this;
//     return (
//       <div>
//         <SectionBox title="Please leave feedback">
//           <FeedbackOptionsBox
//             options={options}
//             onLeaveFeedback={onLeaveFeedback}
//             selected={selectedBtn}
//           />
//         </SectionBox>

//         <SectionBox title="Statistics">
//           <StatisticsBox
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         </SectionBox>
//       </div>
//     );
//   }
// }

Feedback.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    selectedBtn: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }).isRequired,
};
