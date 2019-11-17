const SocketIo = require('socket.io');

function pipline(server) {
  const io = new SocketIo(server);
  io.on('connection', function(client) {
    // emit an event to all connected sockets
    // io.emit('broadcast', 'This message is sent to all users when the connection is successful');

    console.log('Client connected...');
    client.on('join', function() {
      client.emit('messages', "User 'xxx' api Success");
    });

    client.on('eventClient', function(data) {
      console.log(data);
    });

    client.on('disconnect', function() {
      console.log('Client disconnect...');
    });
  });
}

module.exports = {
  pipline
};

