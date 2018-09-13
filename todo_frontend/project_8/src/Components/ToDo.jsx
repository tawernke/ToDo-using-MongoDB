import React, { Component } from 'react'

class ToDo extends Component {
    render() {
    const { toDoText, id, toggleCompleted, isCompleted } = this.props

    
        return (
            <span>
                <li style={{ textAlign: 'left', listStyleType: 'none', textDecoration: isCompleted ? 'line-through' : 'none' }}><input checked={isCompleted} onChange={() => toggleCompleted(id)} type="checkbox" className="form-check-input" />{toDoText}
                </li>
            </span>
        )
    }
}

export default ToDo