import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () => {

const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

// part component
const Part = (props) => {
  return(
   <div>
  <p> {props.p} {props.e} </p>
  </div> 
  
  );
}


//Return for App component
  return (
     <div>
      <Part p={part1} e={exercises1} />
      <Part p={part2} e={exercises2} />
      <Part p={part3} e={exercises3} />
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'))