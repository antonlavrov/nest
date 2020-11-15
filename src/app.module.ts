import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/configuration.module';
import { MongodbConfigModule } from './config/database/mongodb/configuration.module';
import { DatabaseModule } from './database/mongodb/database.module';
import { CatsModule } from './modules/cats/cats.module';

@Module({
  imports: [AppConfigModule, MongodbConfigModule, DatabaseModule, CatsModule],
})
export class AppModule {}
