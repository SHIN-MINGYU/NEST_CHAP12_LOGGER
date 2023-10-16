import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger as WinstonLogger } from 'winston';

@Controller()
export class AppController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: WinstonLogger,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    const message = 'hello';
    this.printWinstonLog(message);
    return this.appService.getHello();
  }

  private printWinstonLog(dto) {
    // console.log(this.logger.name);

    this.logger.error('error: ', dto);
    this.logger.warn('warn: ', dto);
    this.logger.info('info: ', dto);
    this.logger.http('http: ', dto);
    this.logger.verbose('verbose: ', dto);
    this.logger.debug('debug: ', dto);
    this.logger.silly('silly: ', dto);
  }
}
