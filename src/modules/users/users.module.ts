import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongodbConfigModule } from 'src/config/database/mongodb/configuration.module';
import { User, UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), MongodbConfigModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
