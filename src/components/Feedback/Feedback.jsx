import React from 'react';
// import PropTypes from 'prop-types';
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

// Feedback.propTypes = {
//   state: PropTypes.shape({
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//     total: PropTypes.number.isRequired,
//     selectedBtn: PropTypes.number.isRequired,
//     positivePercentage: PropTypes.number.isRequired,
//   }).isRequired,
// };
