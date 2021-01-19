import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)


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
  const setToValue = (setValue, value) => { 
    setValue(value + 1) 
    setAll(all + 1)
  }

  const Output = (props) => (
    <p>{props.text} {props.output}</p>
  )

  const All = () => (<p>all: {all}</p>)

  const Average = () => (
      <p> average {(good-bad)/all} </p>
  )

  const GoodAvg = () => (
    <p> positive {good/all} % </p>
  )
  

    return (
      <div>
        <h1> {headings.heading1}</h1>
        <Button handleClick={() => setToValue(setGood, good)} text={'Good'} />
        <Button handleClick={() => setToValue(setNeutral, neutral)} text={'Neutral'} />
        <Button handleClick={() => setToValue(setBad, bad)}  text={'Bad'} />
        <h2> {headings.heading2} </h2>
        <Output text={'good'} output={good} /> 
        <Output text={'neutral'} output={neutral} />    
        <Output text={'bad'} output={bad} />    
        <All /> 
        <Average />    
        <GoodAvg />
      </div>
  )
  }

ReactDOM.render(<App />, 
  document.getElementById('root')
)

