var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('colors', function(color){
        console.log("time to change to this color: " + color);
        io.emit('colors', color);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});