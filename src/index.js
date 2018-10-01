import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './main.css'
import Check from './components/Check.js'
import Field from './components/allField.js'


  ReactDOM.render(<div className='field'>
  <Field />
  <Check />
  </div>, document.getElementById('root'));
