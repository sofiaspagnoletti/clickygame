import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <ul>
                <li className="score">Score: {props.score}</li>
                <li className="highScore">Highscore: {props.highScore}</li>
            </ul>
        </nav>
    );
}

export default Navbar;
