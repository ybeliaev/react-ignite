import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Julia", age: 26 },
      { name: "Max", age: 32 },
      { name: "Nikolya", age: 41 },
    ],
    otherState: "some other value",
  });
  const [otherState, stateOtherState] = useState("some other value");
  function switchNameHandler() {
    setPersonsState({
      persons: [
        { name: "Marry", age: 33 },
        { name: "Foxy", age: 17 },
        { name: "Nino", age: 32 },
      ],
      // otherState: personsState.otherState,
    });
  }
  console.log(personsState);
  // console.log(otherState);
  const getAge = () => {
    return Math.floor(Math.random() * 50);
  };
  return (
    <div className="App">
      <h1>Hello!</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={getAge()} />
      <Person name={personsState.persons[1].name} age={getAge()} />
      <Person name={personsState.persons[2].name} age={getAge()}>
        My Hobbies - racing
      </Person>
    </div>
  );
};

export default App;
