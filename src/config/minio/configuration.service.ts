import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MinioConfigService {
  constructor(private configService: ConfigService) {}

  get uri(): string {
    return this.configService.get<string>('minio.uri');
  }

  get port(): number {
    return Number(this.configService.get<number>('minio.port'));
  }

  get useSsl(): boolean {
    return this.configService.get<string>('minio.use_ssl') === 'true';
  }

  get accessKey(): string {
    return this.configService.get('minio.access_key');
  }

  get secretKey(): string {
    return this.configService.get<string>('minio.secret_key');
  }
}
