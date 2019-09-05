import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.counter = this.counter.bind(this)

    this.state = { value: 0 }

  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.counter}></textarea>
        <div className="counter" >{this.state.value}</div>
      </div>
    );
  }
  // this function handles an event then gets their value and then we can calculate its length
  counter(e) {
    this.setState({ value: e.target.value.length });
  }
}

export default App;