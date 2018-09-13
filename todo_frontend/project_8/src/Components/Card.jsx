import React, { Component } from 'react'
import axios from 'axios'
import AddToDoComponent from './AddToDoComponent'
import ToDoList from './ToDoList'
import '../App.css'

export default class Card extends Component {
  state = {
      toDos: [],
      filter: 'All'
  }

  componentDidMount() {
    axios.get('http://localhost:8080/')
      .then(response => {
        this.setState({
          toDos: response.data
        })
      })
  }

  toggleCompleted = (id) => {  
    const newState = [...this.state.toDos]
    const pos = newState.findIndex((toDo, i) => {
      return toDo._id === id
    })
    newState[pos].isCompleted = !newState[pos].isCompleted

    axios.put('http://localhost:8080/', newState[pos])    
    this.setState({
        toDos: newState
    })
  }

  addToDoFunction = (toDoText, isCompleted) => {
    axios
      .post('http://localhost:8080/', {toDoText, isCompleted})
      .then(response => {
        const newToDos = this.state.toDos.concat(response.data)
        this.setState({
          toDos: newToDos
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  clearComplete = () => {
    const remainingToDos = this.state.toDos.filter(todo => todo.isCompleted === false)
    const clearedToDos = this.state.toDos.filter(todo => todo.isCompleted)
    this.setState({
      toDos: remainingToDos
    })
    axios.delete('http://localhost:8080/', {data: {clearedToDos}})
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

    filterOption = (e) => {
    this.setState({
      filter: e
    })

  }
  
  render(){
    
    const toDos = this.state.toDos.filter(todo => {
      if(this.state.filter === 'All') return true
      if(this.state.filter === 'Outstanding') return !todo.isCompleted
      else return todo.isCompleted
    })

    return(
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-4 cardStyle">
            <div className="card">
              <div className="card-body">
                <h1>To Do</h1>
                <AddToDoComponent toDos={this.state.toDos} addToDoFunction={this.addToDoFunction}/>
                <ToDoList toDos={toDos} toggleCompleted={this.toggleCompleted}/>
                <div>
                  <button onClick={this.clearComplete} style={{display: 'inlineBlock', textAlign: 'right'}} className="btn btn-secondary">Clear Complete</button>
                </div>
                <select onChange={(e) => {this.filterOption(e.target.value)}}>
                  <option value="All">All</option>
                  <option value="Outstanding">Outstanding</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}