import React, { Component } from 'react';
import Task from './Field';
export default class Field extends Component {

    state = {
      tasks:[
        'Buy milk',
        'clean teets',
        'relax'
      ],
      value:''
    }

  deleteBlock = (i) => {
    let arr = this.state.tasks;
    arr.splice(i , 1);
    this.setState({tasks:arr})

  }

  updateText = (text,i) => {
    let arr = this.state.tasks;
    arr[i] = text;
    this.setState({tasks:arr})

  }

  add = (text) => {
  let arr = this.state.tasks;
       arr.push(text);
       this.setState({tasks:arr})
         console.log(text)
     }

     handleChange = (event) =>{
     this.setState({value: event.target.value});
   }

      render(){
        return (
        <div>
          <textarea id = 'newText' value = {this.state.value}  onChange={this.handleChange}> </textarea>
          <button onClick ={
        () =>  {this.add(this.state.value)
      }
          } className = 'btn light' >create</button>
              {
                this.state.tasks.map( (field,i) => {
                  return (<Task key = {i} index = {i} update={this.updateText} deleteBlock={this.deleteBlock}> {field}</Task>)
                } )
              }
        </div>
      )
      }
}
