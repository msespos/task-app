import React, { Component } from 'react';

class Overview extends Component {
  render() {
    return (
      <ul>
      {this.props.tasks.map((task, index) => {
        return <li key={index}>{"Task #" + (index + 1) + ": " + task}</li>
      })}
      </ul>      
    )
  }
}

export default Overview
