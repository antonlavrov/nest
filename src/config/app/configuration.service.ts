import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('app.name');
  }

  get env(): string {
    return this.configService.get<string>('app.env');
  }

  get url(): string {
    return this.configService.get<string>('app.url');
  }

  get port(): number {
    return Number(this.configService.get<number>('app.port'));
  }

  get secret(): string {
    return this.configService.get<string>('app.secret');
  }

  get sessionMaxAge(): number {
    return Number(this.configService.get<number>('app.session_max_age'));
  }

  get apiDebug(): boolean {
    return this.configService.get<string>('app.api_debug') === 'true';
  }
}
