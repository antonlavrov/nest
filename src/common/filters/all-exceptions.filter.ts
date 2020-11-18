import { Catch, ArgumentsHost, HttpException, HttpStatus, HttpServer } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import ErrorStackParser from 'error-stack-parser';
import { AppConfigService } from 'src/config/app/configuration.service';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(applicationRef: HttpServer, private readonly appConfigService: AppConfigService) {
    super(applicationRef);
  }

  catch(exception: any, host: ArgumentsHost) {
    if (!this.appConfigService.apiDebug) {
      return super.catch(exception, host);
    }
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const stack = ErrorStackParser.parse(exception);

    response.status(status).json({
      statusCode: status,
      message: exception.message,
      stack: stack,
    });
  }
}
