import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongodbConfigService {
  constructor(private configService: ConfigService) {}

  get uri(): string {
    return this.configService.get<string>('mongodb.uri');
  }

  get name(): string {
    return this.configService.get<string>('mongodb.name');
  }

  get user(): string {
    return this.configService.get<string>('mongodb.user');
  }

  get password(): string {
    return this.configService.get<string>('mongodb.password');
  }

  get port(): string {
    return this.configService.get<string>('mongodb.port');
  }

  get srv(): boolean {
    return this.configService.get<string>('mongodb.srv') === 'true';
  }
}
