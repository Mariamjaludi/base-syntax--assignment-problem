import React from 'react';

const UserOutput = props => {

  const { userName } = props
  const style = {
    backgroundColor: 'white',
    color: 'blue'
  }
  return (
    <div
      style={style}
      className="card"
    >
      <p>{userName}</p>
      <p></p>
    </div>
  )

}

export default UserOutput;
