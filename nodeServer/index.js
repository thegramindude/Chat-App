//Node server

const io = require('socket.io')(8000)

const users = {};

io.on('connection', socket =>{
    socket.on('new-user-joined', name=>{
        user[socket.id] = name;
        socket.broadcast.emit('user-joined', name)
    });

    socket.on('send'), message =>{
        socket.broadcast.emit('receive', {message: message, name: user[socket.id]});
    }

    socket.on('disconnect'), message =>{
        socket.broadcast.emit('left', users[socket.id])
        delete users[socket.id];
    }
})