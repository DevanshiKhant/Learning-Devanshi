import { Module,MiddlewareConsumer ,NestModule, RequestMethod } from '@nestjs/common';
import { firstmiddleware } from './middleware/first.middleware';
import { secondmid } from './middleware/second.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';

@Module({
  imports: [],
  controllers: [AppController,CatController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
        //.apply(firstmiddleware)
        //.apply(secondmid)
        .apply(firstmiddleware,secondmid)
        .forRoutes(CatController);
      
  }
}
