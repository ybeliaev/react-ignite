import React, { Component } from "react";
// import styled from "styled-components";
import "./App.css";
import Persons from "../components/Persons/Persons";

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

    return (
      <div className="App">
        <h1>Hello people!</h1>

        {persons}
      </div>
    );
  }
}

export default App;
