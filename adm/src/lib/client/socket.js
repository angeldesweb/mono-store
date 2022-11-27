import { io } from 'socket.io-client';
const ENDPOINT = 'http://localhost:3000';

export const socket = io(ENDPOINT,{
    autoConnect:false
});

socket.onAny((event,...args) => {
    console.log({event,args});
});