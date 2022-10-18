import React from "react";
import "./Detail.css";

function Detail(props) {
  const { attribute, info, style } = props;

  return (
    <div className="container" style={style}>
      <h3>{info}</h3>
      <p>{attribute}</p>
    </div>
  );
}

export default Detail;
