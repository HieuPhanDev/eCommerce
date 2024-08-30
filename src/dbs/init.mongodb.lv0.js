const { default: mongoose } = require('mongoose')
const connectString = 'mongodb://localhost:27017/myShop'

mongoose
  .connect(connectString)
  .catch((err) => console.log(`Error Connect Db!!! ${err}`))
  .then((_) => console.log('Connect Db Success!'))

if (1 === 1) {
  mongoose.set('debug', true)
  mongoose.set('debug', { color: true })
}

module.exports = mongoose
