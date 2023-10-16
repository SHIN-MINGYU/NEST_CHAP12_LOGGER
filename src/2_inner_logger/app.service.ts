import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  getHello(): string {
    this.logger.error('this is error');
    this.logger.warn('this is warn');
    this.logger.log('this is log');
    this.logger.verbose('this is verbose');
    this.logger.debug('this is debug');
    return 'Hello World!';
  }
}
