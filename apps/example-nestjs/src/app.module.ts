import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { CorrelationIdMiddleware } from './correlation-id/correlation-id.middleware';
import { PersonaModule } from './persona/persona.module';
import { Persona } from './persona/entities/persona.enitity';
import { ClientsModule, Transport } from '@nestjs/microservices';
//import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Login } from './login/entities/login.enitity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: '4sd',
      autoLoadEntities: true,
      //entities: [Persona]
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'password',
    //   database: '4sd',
    //    entities: [Login],
    // }),
    PersonaModule,
    
    LoggerModule.forRoot({
    pinoHttp: {
      transport: {
        target: 'pino-pretty',
        options: {
          messageKey: 'message',
        },
      },
      messageKey: 'message',
      
    },
  }),
    
    //AuthModule,
    
    UsersModule
],

})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(CorrelationIdMiddleware).forRoutes('*');
  }
}
