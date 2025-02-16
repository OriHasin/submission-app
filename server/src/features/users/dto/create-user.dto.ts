import { IsString, IsEmail, IsNumber, Matches, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
    @IsString()
    @Matches(/^[a-zA-Z\s]+$/, { message: 'Name can only contain letters and spaces' })
    name: string;

    @IsEmail()
    email: string;
    
    @Type(() => Number)
    @Min(1)
    @IsNumber()
    age: number;

    @IsString()
    @Matches(/^[a-zA-Z\s]+$/, { message: 'City can only contain letters and spaces' })
    city: string;

    @IsString()
    @Matches(/^[a-zA-Z\s]+$/, { message: 'Tennis Player can only contain letters and spaces' })
    favoriteTennisPlayer: string;
}
