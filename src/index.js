const http = require('http')
const path = require('path')
const express = require('express')
const socketio = require('socket.io')

const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
const io = socketio(server)


const server.listen(port,()=>{
    console.log(`Server is up on port ${port}`)
})


