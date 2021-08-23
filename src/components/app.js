import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Mery Pineda Portfolio</h1>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>

        <div>
          <button onclick= "submit" input = "text"> submit</button>
        </div>
      </div>
      
    );
  }
}