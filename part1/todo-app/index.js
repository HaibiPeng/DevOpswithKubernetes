const express = require('express')
const app = express()
const http = require('http')
const todoRouter = require('./todo')
require('dotenv').config()

const server = http.createServer(app)

const PORT = process.env.PORT || 5000

app.use(express.static('build'))
app.use(express.json())

app.use('/', todoRouter)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})