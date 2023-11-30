import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(['debug', 'log', 'error', 'warn', 'verbose']);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
  console.log(
    `Nestjs Server is running on: http://localhost:${process.env.PORT}`,
  );
}
bootstrap();
