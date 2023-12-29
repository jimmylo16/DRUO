import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/TransformResponse.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const logger = new Logger('Bootstrap');

  const config = new DocumentBuilder()
    .setTitle('Helix Medical Info')
    .setDescription('The Medical Info api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.setGlobalPrefix('api', { exclude: ['/'] });

  // Use globaly
  app.useGlobalInterceptors(new TransformInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Remove objects properties with no decortors
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(process.env.PORT || 3001);
  logger.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
