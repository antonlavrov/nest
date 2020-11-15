import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop()
  uuid: string;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

CatSchema.pre<CatDocument>('save', function () {
  this.uuid = uuidv4();
});

CatSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.__v;
    // delete ret._id;
  },
});
