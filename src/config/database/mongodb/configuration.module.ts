import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from '@hapi/joi';
import configuration from './configuration';
import { MongodbConfigService } from './configuration.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().default('localhost'),
        MONGODB_PORT: Joi.string().allow(''),
        MONGODB_USER: Joi.string().allow(''),
        MONGODB_PASSWORD: Joi.string().allow(''),
        MONGODB_NAME: Joi.string().allow(''),
        MONGODB_SRV: Joi.string().default('false'),
      }),
    }),
  ],
  providers: [ConfigService, MongodbConfigService],
  exports: [ConfigService, MongodbConfigService],
})
export class MongodbConfigModule {}
