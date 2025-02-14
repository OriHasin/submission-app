import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, HttpException, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Request } from 'express';
import { EnrichUserDto } from './dto/enrich-user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto, @Req() req: Request) {
    try {
      
      const enrichedData: EnrichUserDto = {
        ...createUserDto,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
      };

      return await this.usersService.create(enrichedData);
      //TODO: Notify all clients via WebSocket
    
    } catch (error) {
      throw new HttpException("Error creating user", HttpStatus.BAD_REQUEST);
    }
  }


  @Get()
  async findAll() {
    try {
    
      return await this.usersService.findAll();
    
    } catch (error) {
      throw new HttpException("Error fetching users", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
