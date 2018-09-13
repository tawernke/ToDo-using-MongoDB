import React, { Component } from 'react'

class AddToDoComponent extends Component {

  addToDoFunction = (e) => {
    e.preventDefault()
    const form = e.target
    const { toDoText } = form
    
    console.log(toDoText.value)
    if (toDoText.value !== '') {
    this.props.addToDoFunction(
      toDoText.value,
      false
    )
    
    toDoText.value = ''
    } else {
        return
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addToDoFunction}>
          <input type="text" name="toDoText" className="form-control" placeholder="Add Item Here"/>
          <button type="submit" style={{margin: "15px"}}className="btn btn-primary">Add Item</button>
        </form>
      </div>
    )
  }
}

export default AddToDoComponent