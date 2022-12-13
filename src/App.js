import Overview from './components/Overview';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      taskArray: [],
      userInput: "",
    }

    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTask(event) {
    event.preventDefault();
    this.setState({
      taskArray: this.state.taskArray.concat(this.state.userInput)
    });
  }
  
  handleChange(event) {
    this.setState({userInput: event.target.value});
  }

  render() {
    const { taskArray, userInput } = this.state;

    return (
      <div>
        <form>
          <input 
            type="text"
            defaultValue={userInput}
            onChange={this.handleChange}
          />
          <button onClick={this.addTask}>Add Task</button>
        </form>
        <Overview tasks={taskArray} />
      </div>
    );
  };
}

export default App;
