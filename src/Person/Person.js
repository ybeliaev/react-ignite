import React from "react";

const person = (props) => {
  return (
    <div>
      <h3>
        Hi, {props.name}! You have {props.age} yeare
      </h3>
      <p>{props.children}</p>
      {console.log(props)}
    </div>
  );
};

export default person;
