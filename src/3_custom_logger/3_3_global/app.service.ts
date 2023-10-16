import { Injectable, Logger } from '@nestjs/common';
import { MyLoggerService } from './logging/logger.service';

@Injectable()
export class AppService {
  constructor(private myLogger: MyLoggerService) {}
  getHello(): string {
    console.log(process.env.NODE_ENV);
    this.myLogger.error('test');
    this.myLogger.debug('test');

    return 'Hello World!';
  }
}
