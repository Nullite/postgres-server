import { Module } from '@nestjs/common';
import { LogController } from './logging.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entity';
import { LogRepository } from './logging.repository';
import { logService } from './logging.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [LogController],
    providers: [LogRepository, logService],
  })
export class LoggingModule {}
