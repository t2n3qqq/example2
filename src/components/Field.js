import React, { Component } from 'react';



export default class Task extends Component {

state = {
  edit:false,
  value : this.props.children[1]
}
    handleChange = (event) =>{
    this.setState({value: event.target.value});
    }

  edit = () =>{
  this.setState({edit:true})
  }

  remove = () =>{
    this.props.deleteBlock(this.props.index)
  }
  save = () =>{

        this.props.update(document.getElementById(this.props.index).value,this.props.index);
        this.setState({edit:false})
  }
  rendNorm = () =>{
    return (
        <div className = 'box'>
            <div className = 'text'>{this.props.children}
            </div>
            <button onClick ={this.edit} className = 'btn light' >Edit</button>
            <button onClick ={this.remove} className = 'btn  red' >Delete</button>
        </div>
    );
  }

  rendEdit = () =>{
    return (
        <div className = 'box'>
            <textarea id={this.props.index} value = {this.state.value} onChange={this.handleChange}> </textarea>
            <button onClick ={this.save} className = 'btn success light' >Save</button>

        </div>
    );
  }
        render() {

              if (this.state.edit){
                return this.rendEdit()
                }
                    else {
                      return this.rendNorm()
                    }
            }
}
