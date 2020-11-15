import { IsNotEmpty, IsString, IsInt, IsNumber, IsIn } from 'class-validator';
import { states } from 'src/resources/states';

export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  age: number;

  @IsNotEmpty()
  @IsString()
  breed: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(Object.keys(states))
  state: string;
}
