import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';

import { AuthContext } from '../../../containers/App';

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
    this.inputElementRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
    // if (this.props.position === 0) {
    //   this.inputElementRef.current.focus();
    // }
  }

  focus() {
    this.inputElementRef.current.focus();
  }
  
  render() {
    console.log('[Person.js] Inside render');
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input 
          type="text" 
          onChange={this.props.changed}
          value={this.props.name}
          ref={this.inputElementRef}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.boolean,
};

export default WithClass(Person, classes.Person);