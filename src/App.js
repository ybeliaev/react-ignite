import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Julia", age: 26 },
      { name: "Max", age: 32 },
      { name: "Nikolya", age: 41 },
    ],
  };
  getAge() {
    return Math.floor(Math.random() * 50);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <button>Switch name</button>
        <Person name="John" age={this.getAge()} />
        <Person name="Maxim" age={this.getAge()} />
        <Person name="Yulia" age={this.getAge()}>
          My Hobbies - racing
        </Person>
      </div>
    );
  }
}

export default App;
