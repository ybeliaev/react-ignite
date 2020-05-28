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
  };

  getAge = () => {
    return Math.floor(Math.random() * 40 + 20); // 20 - 60
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
          {this.state.persons.map((item, index) => {
            return (
              <Person
                name={item.name}
                age={this.getAge()}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
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
