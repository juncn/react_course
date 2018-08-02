import React, { Component } from 'react';
import classes from './App.css';
import Person from './components/Person/Person';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

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
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = '';
    
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangeHandler(event, person.id)} />
              </ErrorBoundary>
            )
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonHandler}
        >
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
