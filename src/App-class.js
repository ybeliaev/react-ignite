import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Julia", age: 23 },
      { name: "Max", age: 32 },
      { name: "Nikolya", age: 41 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Marry", age: 33 },
        { name: "Foxy", age: 17 },
        { name: "Nino", age: 32 },
      ],
    });
  };

  getAge = () => {
    return Math.floor(Math.random() * 50);
  };
  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.getAge()} />
        <Person name={this.state.persons[1].name} age={this.getAge()} />
        <Person name={this.state.persons[2].name} age={this.getAge()}>
          My Hobbies - racing
        </Person>
      </div>
    );
  }
}

export default App;
