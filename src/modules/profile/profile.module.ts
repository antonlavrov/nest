import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { ProfileController } from './profile.controller';

@Module({
  controllers: [ProfileController],
  imports: [AuthModule],
})
export class ProfileModule {}
