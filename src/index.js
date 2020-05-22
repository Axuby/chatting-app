const http = require('http')
const path = require('path')
const express = require('express')
const socketio = require('socket.io')

const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
const io = socketio(server)


const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

io.on('connection',(socket)=>{
    console.log('New websocket connection')

    socket.emit('message','Welcome')//emit to a connection
    socket.broadcast.emit('message','Another connected!')//emit to everybody but not this client

    socket.on('sendMessage',(message)=>{
        // count++;
        // //socket.emit('countedUpdated',count )
        io.emit('message',message)//emits to everyone
    })

    socket.on('disconnect',()=>{
        io.emit('message','A user a ')
    })
})

 server.listen(port,()=>{
    console.log(`Server is up on port ${port}`)
})


