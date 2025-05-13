import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/cleiton/v1');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3306);
}

bootstrap();
