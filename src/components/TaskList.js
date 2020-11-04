import React, { Component } from 'react'
import Todo from './Todo'

export default class TaskList extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          { this.props.todos.map((todo, index) => {
            return <Todo key={index} todo={todo} index={index} toggle={this.props.toggle} delete={this.props.delete} />
          })}
        </ul>
      </div>
    )
  }
}
