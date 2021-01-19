import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


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
  const setToValue = (setValue, value) => { setValue(value + 1) }

  const Output = (props) => (
    <p>{props.text} {props.output}</p>
  )

    return (
      <div>
        <h1> {headings.heading1}</h1>
        <Button handleClick={() => setToValue(setGood, good)} text={'Good'} />
        <Button handleClick={() => setToValue(setBad, bad)}  text={'Bad'} />
        <Button handleClick={() => setToValue(setNeutral, neutral)} text={'Neutral'} />
        <h2> {headings.heading2} </h2>
        <Output text={'good'} output={good} />    
        <Output text={'bad'} output={bad} />   
        <Output text={'neutral'} output={neutral} />         
      </div>
  )
  }

ReactDOM.render(<App />, 
  document.getElementById('root')
)

