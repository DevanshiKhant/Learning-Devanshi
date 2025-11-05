import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './user/user.entity';

@Module({
   imports:[TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'mydb',
      entities:[],
      autoLoadEntities:true,
      synchronize:false
  }),
  UserModule,
],
 
})
export class AppModule {}
