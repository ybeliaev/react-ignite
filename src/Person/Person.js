import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <h3 onClick={props.click}>Hi, {props.name}!</h3>
      <p>You have {props.age} yeare</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
