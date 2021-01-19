import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () => {

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

// Header 
const Header = (props) => {
  return(
  <h2> {props.course} </h2>
  );
}

//Content
const Content = (props) => {
 

  return(
   <div>
    <p> {props.p1} {props.e1} </p>
    <p> {props.p2} {props.e2} </p>
    <p> {props.p3} {props.e3} </p>
   </div>
  );
  
}

//Total
const Total = (props) => {
  const Total = props.e1 + props.e2 + props.e3;
  return(<p> Number of excercises {Total}</p>);


}

//Return for App component
  return (
     <div>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'))