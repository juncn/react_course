import React, { Component } from 'react';

/**
 * This does the same thing as Aux
 */
// const WithClass = (props) => (
//   <div className={props.classes}>
//     {props.children}
//   </div>
// );

// const WithClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

const WithClass = (WrappedComponent, className) => {
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default WithClass;