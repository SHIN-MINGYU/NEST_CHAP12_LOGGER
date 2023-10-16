import {
  Controller,
  Get,
  Inject,
  InternalServerErrorException,
  LoggerService,
} from '@nestjs/common';
import { AppService } from './app.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Controller()
export class AppController {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    const message = 'hello';
    this.printLoggerServiceLog(message);
    return this.appService.getHello();
  }

  private printLoggerServiceLog(dto) {
    try {
      throw new InternalServerErrorException('test');
    } catch (e) {
      this.logger.error('error::', JSON.stringify(dto), e.stack);
    }

    this.logger.warn('warn: ', JSON.stringify(dto));
    this.logger.log('log: ', JSON.stringify(dto));
    this.logger.verbose('verbose: ', JSON.stringify(dto));
    this.logger.debug('debug: ', JSON.stringify(dto));
  }
}
