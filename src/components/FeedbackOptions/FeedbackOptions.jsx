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

// export const FeedbackOptionsBox = ({
//   options,
//   onLeaveFeedback,
//   // selectedBtn,
// }) => {
//   return (
//     <FeedbackOptions>
//       <button
//         selected={selectedBtn === options.good}
//         type="button"
//         onClick={onLeaveFeedback(options.good)}
//       >
//         {options.good}
//       </button>
//       <button
//         selected={selectedBtn === options.neutral}
//         type="button"
//         onClick={onLeaveFeedback(options.neutral)}
//       >
//         {options.neutral}
//       </button>
//       <button
//         selected={selectedBtn === options.bad}
//         type="button"
//         onClick={onLeaveFeedback(options.bad)}
//       >
//         {options.bad}
//       </button>
//     </FeedbackOptions>
//   );
// };
