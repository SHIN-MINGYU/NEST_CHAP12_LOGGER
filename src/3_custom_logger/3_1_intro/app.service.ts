import { Injectable, Logger } from '@nestjs/common';
import { MyLoggerService } from './logging/logger.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  private readonly mylogger = new MyLoggerService();
  getHello(): string {
    this.logger.error('this is error');
    this.logger.warn('this is warn');
    this.logger.log('this is log');
    this.logger.verbose('this is verbose');
    this.logger.debug('this is debug');

    this.mylogger.error('test');

    return 'Hello World!';
  }
}
