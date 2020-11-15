import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CatsService } from 'src/modules/cats/cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cats')
@ApiTags('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async list(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async findOne(@Param('id') id: string): Promise<any> {
    return this.catsService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto): Promise<any> {
    return this.catsService.create(createCatDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async update(@Param('id') id: string, @Body(new ValidationPipe()) updateCatDto: UpdateCatDto) {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async delete(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}
