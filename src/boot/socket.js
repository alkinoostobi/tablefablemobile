import io from 'socket.io-client';

const socket = io('http://localhost:8080');


socket.on('connect', () => {
  if (socket.connected)
    console.log('Connected to server');
  else {
    console.log('NOT Connected to server');
  }
});

export default socket;
