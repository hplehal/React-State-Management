import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      state: 0
    }
  }

  increment = () => {
    this.setState({
      state: this.state.state + 1
    })

    // this.setState(({ state }) => {
    //   return { state: state + 1 };
    // }));

  }

  decrement = () => {
    this.setState({
      state: this.state.state - 1
    })
  }

  reset = () => {
    this.setState({
      state: 0
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.state}</h1>
        <button onClick={() => this.increment()} >Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    )
  }
}

export default App;

