import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { User } from './entities/user.entity';
import { Server } from 'socket.io';
import {corsOrigin} from '../../main';



@WebSocketGateway({ cors: {origin: corsOrigin} })  
export class SocketGateway {
    @WebSocketServer()
    server: Server; 

    notifyUserCreated(user: User) {
        this.server.emit('userCreated', user); 
    }
}
