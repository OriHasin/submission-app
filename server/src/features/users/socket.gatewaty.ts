import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { User } from './entities/user.entity';
import { Server } from 'socket.io';


@WebSocketGateway({ cors: {origin: ["http://localhost", "http://34.31.136.203"]} })  
export class SocketGateway {
    @WebSocketServer()
    server: Server; 

    notifyUserCreated(user: User) {
        this.server.emit('userCreated', user); 
    }
}
