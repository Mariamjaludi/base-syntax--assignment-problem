import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput'
import UserOutput from './UserOutput'

class App extends Component {
  state = {
    userName: "Mariam"
  }

  changeUserHandler = e => {
    this.setState({
      userName: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          changeUser={this.changeUserHandler}
          userName={this.state.userName}
        />
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName={"baz"}/>
        <UserOutput userName={"mohammed"}/>
      </div>
    );
  }
}

export default App;
