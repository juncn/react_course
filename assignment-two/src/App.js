import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';

class App extends Component {
  state = {
    inputValue: '',
    inputLength: 0
  }

  inputChangeHandler = ({target}) => {
    this.setState({
      inputValue: target.value,
      inputLength: target.value.length
    });
  }

  deleteCharHandler = (index) => {
    const inputArr = this.state.inputValue.split('');
    inputArr.splice(index, 1);
    const newInput = inputArr.join('');
    this.setState({
      inputValue: newInput,
      inputLength: this.state.inputLength - 1,
    });

  }

  render() {
    return (
      <div className="App">
        <input 
          type="text" 
          value={this.state.inputValue}
          onChange={this.inputChangeHandler} />
        <p>{this.state.inputLength}</p>
        <ValidationComponent textLength={this.state.inputLength} />
        {
          this.state.inputValue.split('').map((char, index) => {
            return (
              <CharComponent 
                key={index} 
                char={char} 
                delete={() => this.deleteCharHandler(index)} />
            );
          })
        }
      </div>
    );
  }
}

export default App;
