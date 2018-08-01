import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    inputLength: 0
  }

  lengthChangeHandler = ({target}) => {
    this.setState({inputLength: target.value.length});
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.lengthChangeHandler} />
        <p>{this.state.inputLength}</p>
      </div>
    );
  }
}

export default App;
