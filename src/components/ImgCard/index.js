import React from "react";
import "./style.css";

function ImgCard(props) {
  return (
    <div className="card">
      <div className="content">
        <div className="img-container img-thumbnail">
          <img alt={props.name} src={props.image} onClick={() => props.onClick(props.id)} />
        </div>
      </div>
    </div>
  );
}
export default ImgCard;