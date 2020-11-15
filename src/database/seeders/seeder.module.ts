import { Logger, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/providers/database/mongodb/database.module';
import { Seeder } from './seeder';
import { UserSeedersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, UserSeedersModule],
  providers: [DatabaseModule, Logger, Seeder],
})
export class SeederModule {}
