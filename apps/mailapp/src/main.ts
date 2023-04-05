import { NestFactory } from '@nestjs/core';
import { MailappModule } from './mailapp.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(MailappModule);
  // await app.listen(3001);

    //Microservicio emaill

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MailappModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
