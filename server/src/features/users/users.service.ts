import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { EnrichUserDto } from './dto/enrich-user.dto';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async create(enrichedData: EnrichUserDto) {
    const user = this.userRepository.create(enrichedData);
    return this.userRepository.save(user);
  }


  async findAll() {
    const users =  await this.userRepository.find();
    return plainToInstance(User, users);     // apply mask to return only the User Submitted Data with class-transformer (include createdAt field).
  }
  
}
