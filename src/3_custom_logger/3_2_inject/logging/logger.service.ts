import { ConsoleLogger, LoggerService } from '@nestjs/common';

export class MyLoggerService extends ConsoleLogger {
  error(message: any, ...optionalParams: [...any, string?]) {
    super.error(`${message}...`, ...optionalParams);
    this.doSomething(message);
  }
  debug(message: any, ...optionalParams: [...any, string?]) {
    super.debug(`${message}...`, ...optionalParams);
    this.doSomething(message);
  }
  verbose(message: any, ...optionalParams: [...any, string?]) {
    super.verbose(`${message}...`, ...optionalParams);
    this.doSomething(message);
  }
  log(message: any, ...optionalParams: [...any, string?]) {
    super.log(`${message}...`, ...optionalParams);
    this.doSomething(message);
  }
  warn(message: any, ...optionalParams: [...any, string?]) {
    super.warn(`${message}...`, ...optionalParams);
    this.doSomething(message);
  }

  private doSomething(message: any) {
    console.log('데이터 베이스에 로그를 저장합니다');
    console.log(`로그 : ${message}`);
  }
}
