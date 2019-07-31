import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron">
            <div className="container">
                <h2>Clicky game</h2>
                <h4>Click on an image to earn points, but don't click on any more than once!</h4>
            </div>
        </div>
    );
}

export default Jumbotron;