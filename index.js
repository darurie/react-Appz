import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Sanjo'
    };
  }

  render() {
    return (
      <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <input type="text" placeholder="Search.."/>

      <div>
        <Hello name={this.state.name} />
        <p>
          Belive and stay... magic happens :)
        </p>
      </div>
</div>
 

    );
  }
}

render(<App />, document.getElementById('root'));
