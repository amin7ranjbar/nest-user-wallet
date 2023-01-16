import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Gender } from '../../enum';

export class CreateUserDto {
    @ApiProperty({
        example: 'amin',
    })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({
        example: 'amin',
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    username: string;

    @ApiProperty({
        example: 'amin',
    })
    @IsString()
    firstname: string;

    @ApiProperty({
        example: 'ranjbar',
    })
    @IsString()
    lastname: string;

    @ApiProperty({
        example: Gender.male,
    })
    @IsEnum(Gender)
    gender: Gender;
}