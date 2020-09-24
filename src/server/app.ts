
const server = require('http').createServer(app)
const io_s = require('socket.io')(server)

io_s.on('connection', socket => {
  console.log('IO Connected')
})

module.exports = {
  app,
  server
}
