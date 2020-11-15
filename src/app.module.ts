import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/configuration.module';
import { MongodbConfigModule } from './config/database/mongodb/configuration.module';
import { DatabaseModule } from './providers/database/mongodb/database.module';
import { CatsModule } from './modules/cats/cats.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [AppConfigModule, MongodbConfigModule, DatabaseModule, ProfileModule, CatsModule],
})
export class AppModule {}
