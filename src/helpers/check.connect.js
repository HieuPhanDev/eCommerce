const { default: mongoose } = require('mongoose')
const os = require('os')
const process = require('process')
const _SECONDS = 5000
const countConnect = () => console.log(`Number connection: ${mongoose.connections.length}`)
const checkOverLoad = () => {
  setInterval(() => {
    const numConnect = mongoose.connections.length
    const numCores = os.cpus().length
    const memoryUsage = process.memoryUsage().rss
    const maxConnections = numCores * 5
    console.log(`Active connections:: ${numConnect}`)
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`)
    if (numConnect > maxConnections) {
      console.log('Connections overload detected!')
    }
  }, _SECONDS)
}
module.exports = {
  countConnect,
  checkOverLoad,
}
