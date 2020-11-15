import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transformer.interceptors';
import { AppConfigService } from './config/app/configuration.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig: AppConfigService = app.get('AppConfigService');
  app.useGlobalInterceptors(new TransformInterceptor());

  const options = new DocumentBuilder()
    .setTitle('Nest')
    .setDescription('Test Nest application with cats')
    .setVersion('0.1')
    .addTag('profile')
    .addTag('users')
    .addTag('cats')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('swagger', app, document);

  await app.listen(appConfig.port);
}
bootstrap();
