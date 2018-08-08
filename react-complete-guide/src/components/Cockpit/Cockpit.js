import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = classes.Button;
  
  if (props.showPerson) {
    btnClass = [classes.Button, classes.red].join(' ');
  }
  if (props.persons.length <= 2) {
    assignedClasses.push( classes.red );
  }
  if (props.persons.length <= 1) {
    assignedClasses.push( classes.bold );
  }

  return (
    <Aux>
      <h1>Hi, I'm React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Person
      </button>
    </Aux>
  );
}

export default Cockpit;