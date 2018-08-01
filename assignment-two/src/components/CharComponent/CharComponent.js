import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
  return <p className="CharComponent" onClick={props.delete}>{props.char}</p>
};

export default CharComponent;