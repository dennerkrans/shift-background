var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

<<<<<<< HEAD
app.use(express.static('/'));
=======
app.use(express.static(__dirname + '/'))
>>>>>>> 9620afc275b263a8f26a1b1119cc709eff86eee4

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('colors', function(color) {
        console.log("time to change to this color: " + color);
        io.emit('colors', color);
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
