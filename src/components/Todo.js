import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <li style={{ textDecoration: this.props.todo.complete ? 'line-through' : 'none' }}>
        {this.props.todo.text}
        <button onClick={() => {this.props.toggle(this.props.index)}}>{ this.props.todo.complete ? '❎' : '✅'}</button>
        <button onClick={() => {this.props.delete(this.props.index)}}>🗑</button>
      </li>
    )
  }
}
