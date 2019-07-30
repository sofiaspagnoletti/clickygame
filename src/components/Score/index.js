import React from "react";
import "./style.css";

function Score(props) {
    return <div className="gameScore">
    <h3 className="score">Your score {props.score}</h3>
    <h3 className="total">Your score {props.total}</h3>
    
    </div>;
  }
  
  export default Score;