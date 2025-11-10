import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './user.entity';
import { userdetail } from 'src/userdetail/userdetail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([user ,userdetail]), ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
