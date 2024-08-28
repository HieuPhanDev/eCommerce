const app = require('./src/app')
const PORT = 3555
const server = app.listen(PORT, () => {
  console.log(`WSV eCommerce running in port ${PORT}`)
})

// process.on('SIGINT', () => {
//   server.close(() => {
//     console.log('EXIT SERVER')
//   })
// })
