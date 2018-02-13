const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  })
})

http.listen(3000, () => {
  console.log('listening on *:3000');
});
