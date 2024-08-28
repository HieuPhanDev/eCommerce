const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const app = express()
//init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
//init db
//init routes
app.get('/', (req, res, next) => {
  const str = 'hello'
  return res.status(200).json({
    message: 'Hello',
    metadata: str.repeat(100000),
  })
})
module.exports = app
