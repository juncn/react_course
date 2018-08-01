import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';

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
        <ValidationComponent textLength={this.state.inputLength} />
      </div>
    );
  }
}

export default App;
