import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;
let socket;


export const connectSocket = () => {
  socket = io(SOCKET_URL); // connect to the server (@WebScoketGateway())
};


export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
  }
};


export const subscribeToUsers = (callback) => {
  if (!socket) connectSocket();
  socket.on("userCreated", callback);   // listen for the "userCreated" event from the server, then will run the callback
};