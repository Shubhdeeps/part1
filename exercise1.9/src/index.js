import React, { useState } from 'react'
import ReactDOM from 'react-dom'

  // Heading element
  const headings = {
    heading1: 'give feedback',
    heading2: 'statistics'
   }   

     // Button Element
  const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

// setting a value on button click
const setToValue = (setValue, value, setAll, all) => { 
 setValue(value + 1) 
 setAll(all + 1)
}


// output with a condition: no feed given
const Statistics = (props) => {
  if (props.all===0){
    return(
      <p> No feedback given </p>
    )
  }
return( 
  <div>
  <p> good {props.good}</p>
  <p> neutral {props.neutral} </p>
  <p> bad {props.bad} </p>
  <p> all {props.all}</p> 
  <p> average {(props.good-props.bad)/props.all} </p>
  <p> positive {props.good/props.all} % </p>
 </div>
)
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

    return (
      <div>
        <h1> {headings.heading1}</h1>
        <Button handleClick={() => setToValue(setGood, good, setAll, all)} text={'Good'} />
        <Button handleClick={() => setToValue(setNeutral, neutral, setAll, all)} text={'Neutral'} />
        <Button handleClick={() => setToValue(setBad, bad, setAll, all)}  text={'Bad'} />
        <h2> {headings.heading2} </h2>
        <Statistics good={good} bad={bad} neutral={neutral} all={all} />
      </div>
  )
  }

ReactDOM.render(<App />, 
  document.getElementById('root')
)

