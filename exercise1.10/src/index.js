import React, { useState } from 'react'
import ReactDOM from 'react-dom'

  // Heading element
  const headings = {
    heading1: 'give feedback',
    heading2: 'statistics'
   }   

     // Button Element
  const Button = (props) => (
    <button onClick={props.handleClick} > {props.text}</button>
  )

// setting a value on button click
const setToValue = (value, setValue, all, setAll, setAvg, good, bad, setPositive) => {

setValues(setValue, value)
console.log(setValues(setValue, value))
setAllz(setAll, all)

setAvg((good-bad)/all)
setPositive(good*100/all)
}



const setValues = (setValue, value) => {
 setValue(value + 1)
}

const setAllz = (setAll, all) => {
 setAll(all + 1)
 }



// output with a condition: no feed given
const Statistics = (props) => {
return( 
  <div>
  <p> {props.text} {props.stat} </p>
 </div>
)
}



  const App = () => {
   // save clicks of each button to its own state
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)
   const [all, setAll] = useState(0)
   const [avg, setAvg] = useState(0)
   const [positive, setPositive] = useState(0)

    return (
      <div>
        <h1> {headings.heading1}</h1>
        <Button handleClick={() => setToValue(good, setGood, all, setAll, setAvg, good, bad, setPositive)} text={'Good'} />
        <Button handleClick={() => setToValue(neutral, setNeutral, all, setAll, setAvg, good, bad, setPositive)}  text={'Neutral'} />
        <Button handleClick={() => setToValue(bad, setBad, all, setAll, setAvg, good, bad, setPositive)} text={'Bad'} />
        <h2> {headings.heading2} </h2>
        <Statistics text={'good'} stat={good} />
        <Statistics text={'neutral'} stat={neutral} />
        <Statistics text={'bad'} stat={bad} />
        <Statistics text={'all'} stat={all} />
        <Statistics text={'average'} stat={avg} />
        <Statistics text={'positive%'} stat={positive} />
      </div>
  )
  }

ReactDOM.render(<App />, 
  document.getElementById('root')
)
