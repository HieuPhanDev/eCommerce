const { default: mongoose } = require('mongoose')
const { countConnect } = require('../helpers/check.connect')
const connectString = 'mongodb://localhost:27017/myShop'
class Database {
  constructor() {
    this.connect()
  }
  connect(type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }
    mongoose
      .connect(connectString, { maxPoolSize: 50 })
      .catch((err) => console.log(`Error Connect Db!!! ${err}`))
      .then((_) => {
        console.log('Connect Db Success!')
        // countConnect()
      })
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }
}
const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb
