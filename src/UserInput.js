import React from 'react';

const UserInput = props => {

  return (
    <input
      type="text"
      onChange={props.changeUser}
      value={props.userName}
    ></input>
  )

}

export default UserInput;
