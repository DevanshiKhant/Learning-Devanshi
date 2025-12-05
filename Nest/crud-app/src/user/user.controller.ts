import { Body, Controller, Delete, Get, Param, Post, ParseIntPipe ,NotFoundException, Put, Patch, Query} from '@nestjs/common';
import { user } from './user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './createuser.dto';
import { updateUsersDto } from './updateuserdto.dto';
import { CreateUserwithdetailDto } from 'src/userdetail/create-userwithdetaildto.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userservice: UserService){}
  
  //create only new user
  @Post('/create-user')
  create(@Body() createUserDto: CreateUserDto){
    return this.userservice.create(createUserDto);
  }


  //create new userwithdetail
  @Post('/create')
  createdetail(@Body() createUserwithdetailDto: CreateUserwithdetailDto){
    return this.userservice.createuserwithdetail(createUserwithdetailDto);
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
    return this.userservice.filter(gender);
  }

  //select one user
  @Get(':id')
  findOne(@Param('id') id: number):Promise<user>{
     return this.userservice.findone(id);   
  }

  //update the specific user 
  @Put(':id')
    update(@Param('id')id:number , @Body() updateusersDto: updateUsersDto){
        return this.userservice.update(id,updateusersDto)
  }

  //delete the user
  @Delete(':id')
   remove(@Param('id') id: string){
     return this.userservice.remove(+id);
   }
}