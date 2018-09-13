import React, { Component } from 'react'
import ToDo from './ToDo'

class ToDoList extends Component {
  
  render() {
    const toDosJSX = this.props.toDos.map((toDo, i) => {
      return <ToDo 
        toDoText={toDo.toDoText} 
        toggleCompleted={this.props.toggleCompleted}
        isCompleted={toDo.isCompleted}
        id={toDo._id}
        key={i}
        />
    })

    return (
      <ul>
        {toDosJSX}
      </ul>
    )
  }
}

export default ToDoList