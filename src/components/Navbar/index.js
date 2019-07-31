import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <span className="navbartext offset-9 navbar-brand mb-0 h1">Score: {props.score} | Highscore: {props.highScore}</span>
          {/* <span class="navbar-brand mb-0 h1">Highscore: {props.highScore}</span> */}
        </nav>
    );
}

export default Navbar;
