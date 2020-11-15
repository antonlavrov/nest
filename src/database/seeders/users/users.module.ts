import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongodbConfigModule } from 'src/config/database/mongodb/configuration.module';
import { User, UserSchema } from 'src/modules/users/schemas/user.schema';
import { UserSeederService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), MongodbConfigModule],
  providers: [UserSeederService],
  exports: [UserSeederService],
})
export class UserSeedersModule {}
