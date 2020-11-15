import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'username', description: 'username' })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'password', description: 'password' })
  password: string;
}
