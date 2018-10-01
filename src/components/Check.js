import React, { Component } from 'react';


export default class Check extends Component{
  state = {
    checked:true
  }
  handleChecked = () =>{
    this.setState({checked: !this.state.checked})
  }

  render(){
    let message;
      if (this.state.checked){
        message = 'checked'
      } else {
        message = 'unchecked'
      }
      return(
        <div>
        <input type='checkbox' defaultChecked={this.state.checked} onChange={this.handleChecked}/>
        <p>{message}</p>
        </div>

      )
  }
}
