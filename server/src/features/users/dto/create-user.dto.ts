import { IsString, IsEmail, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;
    
    @Type(() => Number)
    @IsNumber()
    age: number;

    @IsString()
    city: string;

    @IsString()
    favoriteTennisPlayer: string;
}
