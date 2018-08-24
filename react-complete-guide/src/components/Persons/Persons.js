import React, { Component } from 'react';
import Person from './Person/Person';

// const Persons = (props) => props.persons.map((person, index) => {
//   return (
//     <Person
//       key={person.id}
//       name={person.name}
//       age={person.age}
//       click={() => props.clicked(index)}
//       changed={(event) => props.changed(event, person.id)} />
//   );
// });

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor');
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate');
    return nextProps.persons !== this.props.persons || 
           nextProps.changed !== this.props.changed ||
           nextProps.clicked !== this.props.clicked;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] Inside render');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          position={index}
          ref={this.lastPersonRef}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)} />
      );
    });
  }
}

export default Persons;