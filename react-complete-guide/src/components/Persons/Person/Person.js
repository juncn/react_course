import React, { Component } from 'react';
import classes from './Person.css';

// const Person = (props) => {
//   return (
//     <div className={classes.Person}>
//       <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old.</p>
//       <p>{props.children}</p>
//       <input 
//         type="text" 
//         onChange={props.changed}
//         value={props.name}
//       />
//     </div>
//   );
// }

class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input 
          type="text" 
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;