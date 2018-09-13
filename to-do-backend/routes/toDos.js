const express = require('express')
const router = express.Router()
const ToDoController = require('../controllers/toDos')

router.get('/', (req, res) => {
    ToDoController
      .getToDos()
      .then(toDos => {
        res.json(toDos)
    })
})

router.post('/', (req, res) => {
    const {toDoText, isCompleted} = req.body
    ToDoController
      .postToDos(toDoText, isCompleted)
      .then(toDos => {
          res.json(toDos)
      })
})

router.put('/', (req, res) => {
    const completedTask = req.body
    ToDoController
      .updateToDos(completedTask)
      .then(toDos => {
        res.json(toDos)
      })
})

router.delete('/', (req, res) => {
    const removeToDos = req.body.clearedToDos
    console.log(removeToDos)
    ToDoController
        .deleteToDos(removeToDos)
        .then(toDos => {
            res.json(toDos)
        })
})

module.exports = router