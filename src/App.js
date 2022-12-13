import Overview from './components/Overview';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskArray: [],
      userInput: "",
    }

    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addTask() {
    this.setState({
      taskArray: this.state.taskArray.concat(this.state.userInput)
    });
  }
  
  handleChange(event) {
    this.setState({userInput: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" defaultValue={this.state.userInput} onChange={this.handleChange} />
          <button onClick={this.addTask}>Add Task</button>
        </form>
        <Overview tasks={this.state.taskArray} />
      </div>
    );
  };
}

export default App;
