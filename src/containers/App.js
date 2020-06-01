import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Persons from "../components/Persons/Persons";

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

class App extends Component {
  state = {
    persons: [
      { id: "asd87as", name: "Julia", age: 26 },
      { id: "er43re", name: "Max", age: 32 },
      { id: "lk4ud32", name: "Nikolya", age: 41 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  deletePersonHandler = (index) => {
    let newPersons = [...this.state.persons];
    newPersons.splice(index, 1);
    console.log(newPersons);
    this.setState({
      persons: newPersons,
    });
  };
  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
    console.log(this.state.showPersons);
  };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((elem) => elem.id === id);

    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = person;
    console.log(newPersons);
    this.setState({ persons: newPersons });
  };

  // getAge = () => {
  //   return Math.floor(Math.random() * 40 + 20); // 20 - 60
  // };

  render() {
    const style = {};
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
      style.backgroundColor = "tomato";
      style.color = "white";
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <div className="App">
        <h1>Hello people!</h1>
        <p className={classes.join(" ")}>It's realy working!</p>
        <StyledButton
          alt={this.state.showPersons}
          style={style}
          onClick={this.togglePersonsHandler}
        >
          Toggle person
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
