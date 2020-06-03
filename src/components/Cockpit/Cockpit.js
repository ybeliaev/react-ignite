import React from "react";
import styled from "styled-components";
import "./Cockpit.css";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "tomato" : "yellow")};
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

const Cockpit = (props) => {
  let classes = [];
  if (this.state.persons.length <= 2) {
    classes.push("red");
  }
  if (this.state.persons.length <= 1) {
    classes.push("bold");
  }
  return (
    <div>
      <p className={classes.join(" ")}>It's realy working!</p>
      <StyledButton
        alt={this.state.showPersons}
        style={style}
        onClick={this.togglePersonsHandler}
      >
        Toggle person
      </StyledButton>
    </div>
  );
};

export default Cockpit;
