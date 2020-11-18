import { Module } from '@nestjs/common';
import { MinioConfigModule } from 'src/config/minio/configuration.module';
import { MinioService } from './minio.service';

@Module({
  imports: [MinioConfigModule],
  providers: [MinioService],
  exports: [MinioService],
})
export class MinioModule {}
