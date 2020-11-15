import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongodbConfigModule } from 'src/config/database/mongodb/configuration.module';
import { MongodbConfigService } from '../../../config/database/mongodb/configuration.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [MongodbConfigModule],
      useFactory: async (mongodbConfigService: MongodbConfigService) => ({
        uri:
          'mongodb' +
          (mongodbConfigService.srv ? '+srv' : '') +
          '://' +
          mongodbConfigService.user +
          (mongodbConfigService.user ? ':' : '') +
          mongodbConfigService.password +
          (mongodbConfigService.user ? '@' : '') +
          mongodbConfigService.uri +
          (mongodbConfigService.port ? ':' : '') +
          mongodbConfigService.port +
          '/' +
          mongodbConfigService.name,
      }),
      inject: [MongodbConfigService],
    }),
  ],
})
export class DatabaseModule {}
