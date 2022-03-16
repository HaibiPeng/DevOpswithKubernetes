const express = require('express')
const app = express()
const http = require('http')
require('dotenv').config()
const { v4: uuidv4 } = require('uuid')

const logRouter = require('express').Router()

const server = http.createServer(app)

const PORT = process.env.PORT || 3000

logRouter.get('/', (request, response) => {
    let date = new Date().toISOString();
    const res = date + ': ' + uuidv4()
    console.log(res);
    response.send(res)
})

app.use(express.static('build'))
app.use(express.json())

app.use('/', logRouter)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
