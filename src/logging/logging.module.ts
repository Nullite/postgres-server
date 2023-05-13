import { Module } from '@nestjs/common';
import { LogController } from './logging.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entity';
import { LogRepository } from './logging.repository';
import { logService } from './logging.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
    imports: 
    [
      TypeOrmModule.forFeature([User]),
      JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
    ],
    controllers: [LogController],
    providers: [LogRepository, logService],
  })
export class LoggingModule {}
