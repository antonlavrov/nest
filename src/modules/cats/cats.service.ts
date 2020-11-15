import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable({ scope: Scope.DEFAULT })
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<CatDocument>) {}

  async findAll(): Promise<Cat[]> {
    return this.catModel.find();
  }

  async findById(id: string): Promise<Cat> {
    return this.catModel.findById({ _id: id });
  }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const catModel = new this.catModel(createCatDto);
    return catModel.save();
  }

  async update(id: string, updateCatDto: UpdateCatDto): Promise<Cat> {
    const catModel = await this.catModel.findById({ _id: id });
    catModel.breed = 'black';
    return catModel.save();
  }

  async delete(id: string): Promise<any> {
    return this.catModel.findByIdAndDelete({ _id: id });
  }
}
