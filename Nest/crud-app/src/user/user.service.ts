import { Injectable ,NotFoundException  } from '@nestjs/common';
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

  async findAll(){
    return this.usersrepository.find();
  }

  async findOne(id: number): Promise<user> {
    const user = await this.usersrepository.findOneBy({ id });
    if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: number, user:user){
     await this.usersrepository.update(id,user);
      return this.findOne(id);
  }
    
  async remove (id:number){
      await this.usersrepository.delete(id);
      return `User id ${id} is deleted`;
  }

  filter(gender : string ,age ?: number,status ?: number){
      const query = this.usersrepository.createQueryBuilder('user');
      
      console.log(query);
      if(gender){
        query.where('user.gender = :gender', {gender})
      }
      
      if(age){
        if(age < 18) {
          query.andWhere('user.age < :age' , {age:  18})
        }
        else if(age > 18){
          query.andWhere('user.age  > :age' , {age : 18})
        }
        else{
          query.andWhere('user.age  = :age' , {age : 18})  
        }
      }
      
      if(status === 1){
       
            query.andWhere('user.status = :status', {status : 1})
        }
        else{
            query.andWhere('user.status = :status', {status : 0})
            
        }
        return query.getOne();
      }
}
