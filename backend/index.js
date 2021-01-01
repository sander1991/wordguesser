const app = require('express');
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
    cors: true,
    origins: ["*"]
});

io.on("connection", (socket) => {
    console.log("a user connected");

    socket.emit('message', 'Hey I Just connected');

    socket.broadcast.emit('message', "Hi this message is send to everyone except sender");

    io.emit("This is send to everyone");

    socket.join("HERE IS A UNIQUE ID FOR THE ROOM");

    socket.to("UNIQUE ID").emit("message", "THIS MESSAGE WILL BE SIND TO EVERYONE IN THE ROOM EXCEPT THE SENDER");

    io.to("UNIQUE ID").emit("message", "THIS MESSAGE WILL BE SIND TO EVERYONE IN THE ROOM");
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => console.log('Server is running on port ' + PORT));