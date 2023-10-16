import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as winston from 'winston';
import { utilities, WinstonModule } from 'nest-winston';

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          level: process.env.NODE_ENV === 'production' ? 'info' : 'silly',
          format: winston.format.combine(
            winston.format.timestamp(), // 로그 남긴 시각 표시
            utilities.format.nestLike('MyApp', {
              // 로그 출처인 appName('MyApp') 설정
              prettyPrint: true,
            }),
          ),
        }),
      ],
    }),
  ],
})
export class AppModule {}
