import React, { Component } from 'react';

class AppHeader extends Component {
  render() {
    const body = this.props.game.map((e)=>{
      console.log(e);
        return <li key = {e} className = 'dive'>name: {e.name } <br/>age: {e.age}</li>
    });
    return (
        <header className="App-header">

        <ul>
            {body}
            {this.props.qwerty}
        </ul>
        </header>
    );
  }
}

export default AppHeader;
