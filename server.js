'use strict'

const app = require('express')()
  ,   server = require('http').createServer(app)
  ,   io = require('socket.io')(server)
  ,   PORT = process.env.PORT || 3000

  app.get('/', (req, res) => {
    res.send('hello')
  })

  server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
  })
