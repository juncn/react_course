import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Jun', age: 24 },
      { id: '3', name: 'Ben', age: 25 },
    ],
    showPerson: false
  }

  nameChangeHandler = ({target}, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  render() {
    const { persons, showPerson } = this.state;
    // let persons = null;
    
    // if (showPerson) {
    //   persons = <Persons 
    //               persons={persons}
    //               clicked={this.deletePersonHandler}
    //               changed={this.nameChangeHandler} />;
    // }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPerson={showPerson} 
          persons={persons}
          clicked={this.togglePersonHandler} />
        {showPerson 
          ? <Persons 
              persons={persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler} />
          : null
        }
      </div>
    );
  }
}

export default App;
