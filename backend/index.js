const app = require('express');
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
    cors: true,
    origins: ["*"]
});

const { createGame } = require('./util/words');

io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on('startGame', ({ gameId }) => {
        createGame().then(words => {
            io.to(gameId).emit('startGame', words);
            console.log("Someone is starting a game");
        })
    })

    socket.on('gameUpdate', ({ gameId, words }) => {
        io.to(gameId).emit(gameId, words);
    })

    socket.on('joinGame', ({ gameId }) => {
        socket.join(gameId);
        console.log("a player joined the room " + gameId);
        socket.to(gameId).emit('joinGame', "A player joined the game!");
    })
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => console.log('Server is running on port ' + PORT));