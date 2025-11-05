import { Injectable  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './createuser.dto';



@Injectable()
export class UserService {

    constructor(
        @InjectRepository(user)
        private readonly usersrepository:Repository<user>
    ){}

     create(createUserDto: CreateUserDto): Promise<user> {
    const users = new user();
    users.email = createUserDto.email;
    users.password = createUserDto.password;
    users.firstname = createUserDto.firstname;
    users.lastname = createUserDto.lastname;
    users.age = createUserDto.age;
    users.gender = createUserDto.gender;
    users.status = createUserDto.status;

    return this.usersrepository.save(users);
  }


    findAll(): Promise<user[]>{
        return this.usersrepository.find();
    }

    findOne(id:number)
    {
        const user =  this.usersrepository.findOne({ where : {id},});
  
        if(!user)
        {
          throw new Error("id not found");
        }
        return user;
    }

 async update(id: number, user:user){
       await this.usersrepository.update(id,user);
       return this.findOne(id);
      }
    
    async remove (id:number){
        await this.usersrepository.delete(id);
        return `${id} no row is delete`;
    }
    }



