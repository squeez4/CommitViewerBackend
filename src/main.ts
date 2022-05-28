import { NestFactory, Reflector } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { ClassSerializerInterceptor } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  await app.listen(3000);
  app.setGlobalPrefix('/api');
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector))
  );
}

bootstrap();