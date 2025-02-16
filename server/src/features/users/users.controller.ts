import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, HttpException, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Request } from 'express';
import { EnrichUserDto } from './dto/enrich-user.dto';
import { TypeORMError } from 'typeorm';


@Controller('api/users')
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

        const response =  await this.usersService.create(enrichedData);
        return response;
    
    } catch (error) {   // ERROR HANDLING
        
        if (error.response?.message) {
          // DTO validation error
          throw new HttpException(error.response.message, HttpStatus.BAD_REQUEST);
        }
        

        if (error.code === '23505') {  
          // TypeORM error: Unique constraint violation (duplicate email)
          throw new HttpException('Email already exists!', HttpStatus.CONFLICT);
        }
    

        if (error instanceof TypeORMError) {
          // Handle other DB-related errors
          throw new HttpException('Database error. Please try again later.', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    

        // Generic error fallback
        throw new HttpException("An unexpected error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
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
