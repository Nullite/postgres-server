import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggingModule } from './logging/logging.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.PORT),
      username: 'postgres',
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
     }), 
     LoggingModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
