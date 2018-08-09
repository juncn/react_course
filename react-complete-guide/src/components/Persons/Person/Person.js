import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';

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
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor');
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
  }

  render() {
    console.log('[Person.js] Inside render');
    return (
      <Aux>
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input 
          type="text" 
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default WithClass(Person, classes.Person);