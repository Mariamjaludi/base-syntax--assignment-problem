import React, { Component } from 'react';

class UserOutput extends Component {

  render(){
    const { userName } = this.props
    return (
      <div>
        <p>{userName}</p>
        <p></p>
      </div>
    )
  }
}

export default UserOutput;
