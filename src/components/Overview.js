import React, { Component } from 'react';

class Overview extends Component {
  render() {
    return (
      <ul>
      {this.props.tasks.map((task, index) => {
        return <li key={task.id}>{"Task #" + (index + 1) + ": " + task.text}</li>
      })}
      </ul>      
    )
  }
}

export default Overview
