import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from '@hapi/joi';
import { AppConfigService } from './configuration.service';
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        APP_NAME: Joi.string().allow(''),
        APP_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
        APP_URL: Joi.string().default('http://localhost'),
        APP_PORT: Joi.number().default(3000),
        APP_SECRET: Joi.string(),
        APP_SESSION_MAX_AGE: Joi.number().default(3600000),
        APP_API_DEBUG: Joi.string().default('false'),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
