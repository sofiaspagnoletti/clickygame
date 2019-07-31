import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav class="navbar navbar-light navbar-fixed-top bg-light">
          <span class="offset-9 navbar-brand mb-0 h1">Score: {props.score}</span>
          <span class="navbar-brand mb-0 h1">Highscore: {props.highScore}</span>
        </nav>
    );
}

export default Navbar;
