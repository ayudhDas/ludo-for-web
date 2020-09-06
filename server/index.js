const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port = process.env.PORT || 9000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);


io.on('connection', client => {
    console.log(`client connected with params`);
    console.log(client.id);

    client.on('event', data => {
        console.log(`client published event with params`);
        console.log(data);
    });

    client.on('chat:message', data => {
        console.log(`client published event with params`);
        console.log(data);
        io.emit('chat:response', {
            text: 'this is a server autoresponse'
        });
    });

    client.on('disconnect', () => {
        console.log(`client disconnected`);
    })
})


server.listen(port, () => {
    console.log(`server running at port: ${port}`);
})
