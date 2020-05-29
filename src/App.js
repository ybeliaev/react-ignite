import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

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
      transition: "all 0.3s ease-out",
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((item, index) => {
            return (
              <Person
                key={item.id}
                name={item.name}
                age={this.getAge()}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangeHandler(event, item.id)}
              />
            );
          })}
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
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
