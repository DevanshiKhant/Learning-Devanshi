import { Body, Injectable ,NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './createuser.dto';
import { updateUsersDto } from './updateuserdto.dto';
import { userdetail } from 'src/userdetail/userdetail.entity';
import { CreateUserwithdetailDto } from 'src/userdetail/create-userwithdetaildto.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(user) private readonly usersrepository:Repository<user>,
        @InjectRepository(userdetail) private readonly userdetailrepository:Repository<userdetail>){}


   async create(createUserDto :CreateUserDto){
      const User = await this.usersrepository.create(createUserDto);
      console.log(User)
      return this.usersrepository.save(User);
    }

    createuserwithdetail(CreateuserwithdetailDto: CreateUserwithdetailDto): Promise<user> {
        const users = this.usersrepository.create({
            email: CreateuserwithdetailDto.email,
            password:CreateuserwithdetailDto.password,
            status: CreateuserwithdetailDto.status,
            details: {
                  firstname: CreateuserwithdetailDto.details.firstname,
                  lastname: CreateuserwithdetailDto.details.lastname ,
                  mobileno: CreateuserwithdetailDto.details.mobileno,
                  gender:  CreateuserwithdetailDto.details.gender ,
                  city:  CreateuserwithdetailDto.details.city
             }
        })    
        return this.usersrepository.save(users);
    }

   
    async findAll(){
     return this.usersrepository.find();
    }

    async findone(id: number): Promise<user> {
      const user = await this.usersrepository.findOne({ where : {id }, relations :['details'] });
      if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
       }
      return user;
   }

    async update(id: number,updateuserdto:updateUsersDto){
        const user = await this.usersrepository.findOne({ where: { id }, relations: ['details'] });
        if (!user) throw new NotFoundException('User not found');
        
          if (updateuserdto.email) user.email = updateuserdto.email;
          if (updateuserdto.password) user.password =  updateuserdto.password;
          if (updateuserdto.status) user.status =  updateuserdto.status;
        
          if (updateuserdto.details) {
              if (!user.details) {
                user.details = this.userdetailrepository.create(updateuserdto.details);
              } 
              else {
                if (updateuserdto.details.firstname) user.details.firstname = updateuserdto.details.firstname;
                if (updateuserdto.details.lastname) user.details.lastname = updateuserdto.details.lastname;
                if (updateuserdto.details.mobileno) user.details.mobileno = updateuserdto.details.mobileno;
                if (updateuserdto.details.gender) user.details.gender = updateuserdto.details.gender;
                if (updateuserdto.details.city) user.details.city = updateuserdto.details.city;
              }
        }
        return await this.usersrepository.save(user);
    }
   
    async remove (id:number){
      await this.usersrepository.delete(id);
      await this.userdetailrepository.delete(id);
      return `User id ${id} is deleted`;
    }

    filter(gender : string){
      const query = this.userdetailrepository.createQueryBuilder('userdetail');
      
      console.log(query);
      if(gender){
        query.where('userdetail.gender = :gender', {gender})
      }
        return query.getMany();
    }
}
