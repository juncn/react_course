import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: 'Jun',
  }

  changeNameHandler = ({target}) => {
    this.setState({userName: target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput changeName={this.changeNameHandler} userName={this.state.userName} />  
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
