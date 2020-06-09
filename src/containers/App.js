import React, { Component } from "react";
// import styled from "styled-components";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AuxWithClass from "../hoc/AuxWithClass";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js constractor");
  }
  state = {
    persons: [
      { id: "asd87as", name: "Julia", age: 26 },
      { id: "er43re", name: "Max", age: 32 },
      { id: "lk4ud32", name: "Nikolya", age: 41 },
    ],
    otherState: "some other value",
    showPersons: true,
  };
  // getDerivedStateFromProps викликається безспосередньо перед викликом методу render, як при першому рендерингу, так і при всіх наступних оновленнях. Він має повернути об’єкт для оновлення стану або null, щоб не оновлювати нічого.
  static getDerivedStateFromProps(props, state) {
    console.log("App.js getDerivedStateFromProps", props);
    return state;
  }
  componentWillMount() {
    console.log("App.js componentWillMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("App.js shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("App.js componentDidUpdate");
  }
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
  };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((elem) => elem.id === id);

    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = person;

    this.setState({ persons: newPersons });
  };

  // getAge = () => {
  //   return Math.floor(Math.random() * 40 + 20); // 20 - 60
  // };

  render() {
    console.log("App.js render");
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
    }

    return (
      <AuxWithClass classes="App">
        <h1>Hello people!</h1>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          toggleClick={this.togglePersonsHandler}
        />
        {persons}
      </AuxWithClass>
    );
  }
}

export default App;
