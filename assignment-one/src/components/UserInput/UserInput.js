import React from 'react';

const style = {
  marginTop: '40px',
  padding: '16px',
  fontSize: '16px',
}

const UserInput = (props) => (
  <input
    style={style} 
    type="text"
    onChange={props.changeName}
    value={props.userName}
  />
);

export default UserInput;