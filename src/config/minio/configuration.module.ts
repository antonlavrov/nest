import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from '@hapi/joi';
import { MinioConfigService } from './configuration.service';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        MINIO_URI: Joi.string().default('http://localhost'),
        MINIO_PORT: Joi.number().default(9000),
        MINIO_USE_SSL: Joi.string().default('false'),
        MINIO_ACCESS_KEY: Joi.string(),
        MINIO_SECRET_KEY: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService, MinioConfigService],
  exports: [ConfigService, MinioConfigService],
})
export class MinioConfigModule {}
