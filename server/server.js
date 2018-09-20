const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
    console.log('New user conencted');
    socket.emit('newMessage',{
      from: 'Vasanth',
      text: 'Hello buddy',
      createdAt: 1234343
    });

    // socket.on('createEmail',(newEmail)=>{
    //    console.log('createEmail', newEmail);
    // });

    socket.on('createMessage',(message) =>{
      console.log('createMessage',message);
    });


    socket.on('disconnect',()=>{
      console.log('Disconnected from server');
    });
});

server.listen(port,()=>{
  console.log(`Server started in port ${3000}`)
})
