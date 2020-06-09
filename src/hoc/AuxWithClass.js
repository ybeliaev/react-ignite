import React from "react";

const auxWithClass = (props) => (
  <div className={props.classes}>{props.children}</div>
);

export default auxWithClass;
