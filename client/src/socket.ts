import io from 'socket.io-client';

const socket = io('http://localhost:9000');
socket.on('connect', () => {
    console.log('socket connection established');
});

socket.on('event', (data) => {
    console.log(`event listened with data: ${data}`);
});

socket.on('disconnect', () => {
    console.log('socket connection ended');
})

export default socket;
