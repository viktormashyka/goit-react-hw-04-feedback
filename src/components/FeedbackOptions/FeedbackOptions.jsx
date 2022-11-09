import PropTypes from 'prop-types';

import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptionsBox = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptions>
      {Object.values(options).map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </FeedbackOptions>
  );
};

FeedbackOptionsBox.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
