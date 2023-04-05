import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Feedback } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = event => {
    switch (event) {
      case 'Good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'Neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'Bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Feedback>
      <SectionTitle title={'Please lieve feedback'}>
        <FeedbackOptions
          optionButtons={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={addFeedback}
        />
      </SectionTitle>
      <SectionTitle title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positiveFeedback={countPositiveFeedbackPercentage()}
        />
      </SectionTitle>
      <GlobalStyle />
    </Feedback>
  );
};
