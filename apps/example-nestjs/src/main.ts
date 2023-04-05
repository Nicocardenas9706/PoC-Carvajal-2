import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino/Logger';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  
  app.useLogger(app.get(Logger));
  
  
}
bootstrap();
