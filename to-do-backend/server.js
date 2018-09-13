const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || process.argv[2] || 8080
const mongoose = require('mongoose')

app.use(cors())
app.use(bodyParser.json())
app.use('/', require('./routes/toDos'))

mongoose.connect('mongodb://localhost:27017/')

// Tell Mongoose to use ES6 Promises for its promises
mongoose.Promise = global.Promise;

// Log to console any errors or a successful connection.
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Connected to db at /data/db/")
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})