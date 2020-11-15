import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsNumber, IsIn } from 'class-validator';
import { states } from 'src/resources/states';

export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Tom', description: 'Name' })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @ApiProperty({ example: 4, description: 'Age' })
  age: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Bengal', description: 'Breed' })
  breed: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(Object.keys(states))
  @ApiProperty({ example: 'AL', description: 'State' })
  state: string;
}
