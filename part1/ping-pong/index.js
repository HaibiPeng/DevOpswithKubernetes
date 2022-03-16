const express = require('express')
const app = express()
const http = require('http')
require('dotenv').config()

const pingPongRouter = require('express').Router()

const server = http.createServer(app)

const PORT = process.env.PORT || 4000

let count = 0;
pingPongRouter.get('/pingpong', (request, response) => {
    console.log(count)
    response.send('pong ' + count)
    count++
})

app.use(express.static('build'))
app.use(express.json())

app.use('/', pingPongRouter)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})