import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Module } from '@nestjs/common';
import { MongodbConfigModule } from 'src/config/database/mongodb/configuration.module';
import { MinioModule } from 'src/providers/minio/minio.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]), MongodbConfigModule, MinioModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
