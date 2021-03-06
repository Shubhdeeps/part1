import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// array to store value of each vote
const points = [0, 0, 0, 0, 0, 0]


//headings 
const Heading = (props) => {
  return(
    <h2> {props.text} </h2>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [count, setCounter] = useState(0)


  return (
    <div>
       <Heading text={'Anecdote of the day'} />
       <p> {props.anecdotes[selected]} </p>
       <Output selected={selected} />
       <Button handleClick={() => {increment(props.points, selected, setCounter, count)}} text={'vote'} />
       <Button handleClick={() => {setRandom(setSelected)}} text={'Next anecdote'} />
       <Heading text={'Anecdote with most votes'} />
       <HighestVote mostVote={mostVote()} />
    </div>
  )
}


// highest vote anecdote
const HighestVote = (props) => {

  const num = props.mostVote;

  return(
    <div>
    <p> {anecdotes[num]} </p>
    <p> has {points[num]} votes </p>
    </div>
  )
}

//return index of highest number
const mostVote = () => {
return (points.indexOf(Math.max.apply(Math, points)))
}

// increment function to increase the value of the votes per click
const increment = (points, selected, setCounter, count) => {
  // incrementing vote
points[selected] += 1
setCounter(points[selected])
}


// Button component
const Button = (props) => {
  return(
  <button onClick={props.handleClick}> {props.text}  </button>
  )
}
 

//Output component
const Output = (props) => {
 
  return(
    <p> has {points[props.selected]} votes </p>
  )
} 


// setRandom funtion using maths functions to select a random number from 0 to 5
const setRandom = (setSelected) => {
const random = Math.random()*5
setSelected(Math.round(random))
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


  
ReactDOM.render(
  <App anecdotes={anecdotes} points={points} />,
  document.getElementById('root')
)