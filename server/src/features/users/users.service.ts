import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { EnrichUserDto } from './dto/enrich-user.dto';
import { plainToInstance } from 'class-transformer';
import { SocketGateway } from './socket.gatewaty';


@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) 
              private readonly userRepository: Repository<User>,
              private readonly socket: SocketGateway) {}

  async create(enrichedData: EnrichUserDto) {
    const user = this.userRepository.create(enrichedData);                            // create a new user instance (entity)
    await this.userRepository.save(user);                                             // save the user to the db
    console.log(`added new user to db! ${JSON.stringify(enrichedData, null, 2)}`);    // log the user data
    this.socket.notifyUserCreated(plainToInstance(User, user));                       // notify the socket server with entity user data

  }


  async findAll() {
    const users =  await this.userRepository.find();
    return plainToInstance(User, users);     // apply mask to return only the User Submitted Data with class-transformer (include createdAt field).
  }
  
}
