const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.emit('connect', `A new user, ${Date.now()}, has connected`);

  socket.on('disconnect', () => {
    console.log('Disconnect');
  })
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
})


http.listen(3000, () => {
  console.log('listening on *:3000');
});
