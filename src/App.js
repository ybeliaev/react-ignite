import React from "react";

import "./App.css";
import Person from "./Person/Person";

function App() {
  function getAge() {
    return Math.floor(Math.random() * 50);
  }
  return (
    <div className="App">
      <h1>Hello!</h1>

      <Person name="John" age={getAge()} />
      <Person name="Maxim" age={getAge()} />
      <Person name="Yulia" age={getAge()}>
        My Hobbies - racing
      </Person>
    </div>
  );
}

export default App;
