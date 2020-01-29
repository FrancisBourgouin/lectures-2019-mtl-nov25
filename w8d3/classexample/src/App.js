import React, { Component } from "react";
import "./App.scss";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

// function App() {
//   return <h1>Hello</h1>;
// }

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      name: "Francis",
      count: 0
    };
  }

  componentDidMount() {
    //Do an axios call
    console.log("I AM A FAKE AXIOS CALL");
  }

  writeAConsoleLog = () => {
    console.log("MWHAHAHA");
  };

  render() {
    const currentState = this.state;
    const { name, count } = this.state;
    this.writeAConsoleLog();
    return (
      <main>
        <h1>Hello {name}</h1>;
        <button
          onClick={() => this.setState({ ...currentState, count: count + 1 })}
        >
          {" "}
          You clicked {count} times
        </button>
      </main>
    );
  }
}

export default App;
