const mongoose = require('mongoose')
const {Schema} = mongoose

const toDoSchema = new Schema({
    toDoText: String,
    isCompleted: Boolean,
    created_at: Date,
    updated_at: Date
})

const ToDo = mongoose.model('ToDo', toDoSchema)

module.exports = ToDo