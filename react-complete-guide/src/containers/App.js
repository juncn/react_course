import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import WithClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor');
    this.state = {
      persons: [
        { id: '1', name: 'Max', age: 28 },
        { id: '2', name: 'Jun', age: 24 },
        { id: '3', name: 'Ben', age: 25 },
      ],
      showPerson: false,
      togglePerson: 0,
      authenticated: false,
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate');
  //   // return true;
  //   return nextState.persons !== this.state.persons ||
  //          nextState.showPerson !== this.state.showPerson;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps', nextProps, prevState);
    return prevState;
  }

  // Get a snapshot of the DOM right before it's about to chagne
  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
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
    this.setState((prevState, props) => {
      return { 
        showPerson: !doesShow,
        togglePerson: prevState.togglePerson + 1,
      }
    });
  }

  loginHandler = () => {
    console.log('login button is clicked');
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] Inside render');
    const { persons, showPerson } = this.state;

    return (
      <Aux>
        <button onClick={() => {this.setState({showPerson: true})}}>Show Persons</button>
        <Cockpit 
          showPerson={showPerson} 
          persons={persons}
          login={this.loginHandler}
          clicked={this.togglePersonHandler} 
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {showPerson 
            ? <Persons 
                persons={persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler} 
              />
            : null
          }
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default WithClass(App, classes.App);
