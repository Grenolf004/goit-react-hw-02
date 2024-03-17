import { useState, useEffect } from 'react'
import './App.css'
import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'
import Notification from './Notification/Notification'

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState(() => {
	const savedFeedback = window.localStorage.getItem("saved-feedback");
  if (savedFeedback !== null) {
    return JSON.parse(savedFeedback);
  }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = feedbackType => {
    setFeedbackTypes({
      ...feedbackTypes,
      [feedbackType]: feedbackTypes[feedbackType] + 1
    });
  }
  
  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);
  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const positiveFeedback = Math.round(((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} setFeedbackTypes={setFeedbackTypes} />
      {totalFeedback > 0 ? <Feedback good={feedbackTypes.good} bad={feedbackTypes.bad} neutral={feedbackTypes.neutral} totalFeedback={totalFeedback} positive={positiveFeedback} />:<Notification />} 
    </>
  )
}

export default App