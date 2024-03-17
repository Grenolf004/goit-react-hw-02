import css from './Feedback.module.css'

function Feedback({ good, bad, neutral, totalFeedback, positive }) {
  return (
        <ul className={css.feedback_list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback} </li>
          <li>Positive: {positive}%</li>
      </ul>
      
  )
}

export default Feedback