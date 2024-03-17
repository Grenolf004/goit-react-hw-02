import css from './Options.module.css'

function Options({ updateFeedback, totalFeedback, setFeedbackTypes }) {
  return (
      <ul className={css.button_list}>
        <li><button onClick={() => { updateFeedback('good') }}>Good</button></li>  
        <li><button onClick={() => { updateFeedback('neutral') }}>Neutral</button></li> 
        <li><button onClick={() => { updateFeedback('bad') }}>Bad</button></li>  
        {totalFeedback > 0 && (<li><button onClick={() => setFeedbackTypes({good: 0,neutral: 0,bad: 0})}>Reset</button></li> )}
      </ul>
  )
}

export default Options