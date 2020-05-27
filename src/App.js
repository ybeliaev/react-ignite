import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Julia", age: 26 },
      { name: "Max", age: 32 },
      { name: "Nikolya", age: 41 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: "Foxy", age: 17 },
        { name: "Nino", age: 32 },
      ],
    });
  };
  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  getAge = () => {
    return Math.floor(Math.random() * 50);
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.getAge()}
            click={this.switchNameHandler.bind(this, "Maximillian!")}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.getAge()}
            changed={this.nameChangedHandler}
          />
          <Person name={this.state.persons[2].name} age={this.getAge()}>
            My Hobbies - racing
          </Person>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
