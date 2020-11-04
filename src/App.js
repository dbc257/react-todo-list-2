import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newTodoText: '',
      todos: [
        { text: 'Another Todo', complete: false },
        { text: 'Another another Todo', complete: false },
        { text: 'A third really long todo name', complete: false }
      ],
    }
  }

  handleChange = (e) => {
    this.setState({ newTodoText: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // // option 1: spread and push new item
    // let newTodos = [...this.state.todos];
    // let newItem = {
    //   text: this.state.newTodoText,
    //   complete: false
    // }
    // newTodos.push(newItem);
    // this.setState({
    //   todos: newTodos
    // })

    // option 2: concat
    this.setState({
      todos: this.state.todos.concat({
        text: this.state.newTodoText,
        complete: false
      }),
      newTodoText: ''
    })
  }

  handleDelete = (indexOfItemToDelete) => {
    // // option 1: splice array
    // // create a copy of todos from state
    // let newTodos = [...this.state.todos];
    // // remove item based on index provided
    // newTodos.splice(indexOfItemToDelete, 1);
    // // update state with new todos after item has been removed
    // this.setState({
    //   todos: newTodos
    // })

    // option 2: filter
    let newTodos = this.state.todos.filter((todo, index) => index !== indexOfItemToDelete)
    this.setState({
      todos: newTodos
    })
  }

  handleToggleComplete = (indexOfItemToToggle) => {
    // create a copy of the todo we want to toggle
    let newTodoItem = {...this.state.todos[indexOfItemToToggle]};
    // toggle the complete status (use opposite of current value)
    newTodoItem.complete = !newTodoItem.complete
    // create a copy of the todos from state
    let newTodos = [...this.state.todos];
    // insert newTodo in place of old todo
    newTodos.splice(indexOfItemToToggle, 1, newTodoItem);
    // set state with new array of todos including new modified todo item
    this.setState({
      todos: newTodos
    })
  }

  render() {
    let incomplete = [];
    let complete = [];
    this.state.todos.forEach((todo) => {
      if (todo.complete) {
        complete.push(todo)
      } else {
        incomplete.push(todo);
      }
    })
    return (
      <div className="App">
        <h1>Add Task</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Todo Item:
            <input type="text" value={this.state.newTodoText} onChange={this.handleChange} />
          </label>
          <button type="submit">Add Item</button>
        </form>
        <TaskList title="My Tasks" todos={incomplete} delete={this.handleDelete} toggle={this.handleToggleComplete} />
        <TaskList title="Complete Tasks" todos={complete} delete={this.handleDelete} toggle={this.handleToggleComplete} />
      </div>
    );
  }
}

export default App;
