import { Body, Controller, Delete, Get, Param, Post, ParseIntPipe ,NotFoundException, Put, Patch} from '@nestjs/common';
import { CreateUserDto } from './createuser.dto';
import { user } from './user.entity';
import { UserService } from './user.service';
import { promises } from 'dns';

@Controller('users')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto){
    return this.userservice.create(createUserDto);
  }

  @Get()
  findAll(): Promise<user[]> {
    return this.userservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string){
            try {
                return this.userservice.findOne(+id);   
            } catch (error) {
                    throw new NotFoundException(error.message);
            }
        }


  @Patch(':id')
    update(@Param('id')id:number , @Body() user: user):Promise<user | null>{
        return this.userservice.update(id,user)
    }


  @Delete(':id')
   remove(@Param('id') id: string){
     return this.userservice.remove(+id);
   }
}
