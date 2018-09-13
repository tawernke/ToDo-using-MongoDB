const ToDo = require('../model/toDos')

const ToDoController = {
    getToDos: () => {
        return new Promise((resolve, reject) => {
            ToDo
              .find({})
              .then(toDos => {
                  resolve(toDos)
              })
        })
    },
    postToDos: (toDoText, isCompleted) => {
        return new Promise((resolve, reject) => {
            ToDo({
                toDoText, 
                isCompleted
            })
            .save()
            .then(toDo => {
                resolve(toDo)
            })
        })
    },
    updateToDos: (updatedToDo) => {
        return new Promise((resolve, reject) => {
            ToDo
            .findByIdAndUpdate(
                updatedToDo._id, 
                updatedToDo,
                )
              .then(toDo => {
                  resolve(toDo)
              })
        })
    },
    deleteToDos: (deletedToDos) => {
        console.log(deletedToDos)
        return new Promise((resolve, reject) => {
            deletedToDos.forEach(todo => {
            ToDo
                .findByIdAndDelete(
                    todo._id,
                    todo
                )
                .then(todo => {
                    resolve(todo)
                })
            })
        })
    }
}

module.exports = ToDoController