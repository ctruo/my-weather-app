import React from "react";
import "./Detail.css";

function Detail(props) {
  const { attribute, info } = props;

  return (
    <div className="container">
      <h3>{info}</h3>
      <p>{attribute}</p>
    </div>
  );
}

export default Detail;
