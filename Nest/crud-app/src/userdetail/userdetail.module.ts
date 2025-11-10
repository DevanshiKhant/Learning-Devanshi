import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userdetail } from 'src/userdetail/userdetail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([userdetail]), ],
  controllers: [],
  providers: []
})
export class UserdetailModule {}
