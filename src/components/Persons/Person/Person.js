import React, { Component } from "react";
import styled from "styled-components";
// import "./Person.css";
const StyledDiv = styled.div`
  width: 30%;
  margin: 1rem auto;
  padding: 1rem;
  border: 1px solid rgba(255, 205, 171, 1);
  border-radius: 0.2rem;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
  background-color: rgba(255, 205, 171, 0.8);
  transition: all 0.3s;

  &:hover {
    box-shadow: 1px 4px 7px #ccc;
  }
  h3 {
    cursor: pointer;
  }
  @media (min-width: 800px) {
    width: 400px;
  }
`;

class Person extends Component {
  render() {
    console.log("Person.js render..");

    return (
      // <div className="Person">
      <StyledDiv>
        <h3 onClick={this.props.click}>Hi, {this.props.name}!</h3>
        <p>You have {this.props.age} year</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </StyledDiv>
    );
  }
}

export default Person;
