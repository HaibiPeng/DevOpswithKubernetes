const todoRouter = require('express').Router()

todoRouter.get('/', (request, response) => {
  response.redirect(302, 'https://photographb.cn/')
})

module.exports = todoRouter