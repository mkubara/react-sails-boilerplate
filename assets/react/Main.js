'use strict';

import React from 'react';



export default class Main extends React.Component {
  constructor() {
  	super();

    this.state = {
      count: 123
    };
  }


  _handleClick(e) {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  }


  render() {
    return (
      <div>
        <div>
          <button onClick={this._handleClick.bind(this)}>Click to Increment</button>
        </div>
        <span>{this.state.count}</span>
      </div>
    )
  }
}
