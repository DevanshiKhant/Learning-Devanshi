import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './user/user.entity';
import { userdetail } from './user/userdetail.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
   imports:[
      ConfigModule.forRoot(),
      TypeOrmModule.forRootAsync({
      imports: [ConfigModule], 
      useFactory: async (configService: ConfigService) => ({
         type: 'mysql',
         host: configService.get('DB_HOST'),
         port: +configService.get('DB_PORT'),
         username: configService.get('DB_USERNAME'),
         password: configService.get('DB_PASSWORD'),
         database: configService.get('DB_DATABASE'),
         entities: [user,userdetail], 
         synchronize: true, 
      }),
      
      inject: [ConfigService], 
   }),
   UserModule,
],
 
})
export class AppModule {}
