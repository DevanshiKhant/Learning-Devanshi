import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { secondmid } from './middleware/second.middleware';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(secondmid); // global middleware
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
