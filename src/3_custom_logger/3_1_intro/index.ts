import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogLevel } from '@nestjs/common';

const logger: LogLevel[] =
  process.env.NODE_ENV === 'prod' ? ['error', 'warn', 'log'] : ['debug'];

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false,
    // logger,
  });
  await app.listen(3000);
}
export default bootstrap;
