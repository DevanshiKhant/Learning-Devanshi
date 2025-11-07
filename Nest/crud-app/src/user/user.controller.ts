import { Body, Controller, Delete, Get, Param, Post, ParseIntPipe ,NotFoundException, Put, Patch, Query} from '@nestjs/common';
import { CreateUserDto } from './createuser.dto';
import { user } from './user.entity';
import { UserService } from './user.service';
import { promises } from 'dns';

@Controller('users')
export class UserController {
  constructor(private readonly userservice: UserService) {}
  
  //create new user
  @Post('/create')
  create(@Body() createUserDto: CreateUserDto){
    return this.userservice.create(createUserDto);
  }
  
  //select all user
  @Get()
  findAll(){
    return this.userservice.findAll();
  }

    
  //apply on filter gender , age and status 
  @Get('/filter')
   filter(@Query() queryparams: any){
    const gender = queryparams.gender;
    const age = queryparams.age;
    const status = queryparams.status;

    return this.userservice.filter(gender,+age ,+status);
  }

  //select one user
  @Get(':id')
  findOne(@Param('id') id: number):Promise<user>{
     return this.userservice.findOne(id);   
  }

  //update the specific user 
  @Patch(':id')
    update(@Param('id')id:number , @Body() user: user):Promise<user | null>{
        return this.userservice.update(id,user)
  }

  //delete the user
  @Delete(':id')
   remove(@Param('id') id: string){
     return this.userservice.remove(+id);
   }
}
