import React from 'react';

const UserOutput = props => {

  const { userName } = props
  return (
    <div>
      <p>{userName}</p>
      <p></p>
    </div>
  )

}

export default UserOutput;
