import React from 'react';

const CharComponent = (props) => {
  return <p onClick={props.delete}>{props.char}</p>
};

export default CharComponent;