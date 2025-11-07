import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { userdetail } from "./userdetail.entity";

@Entity('users')
export class user {
        @PrimaryGeneratedColumn()
        id:number;

        @Column()
        email:string;

        @Column()
        password:number;

        @Column()
        firstname:string;

        @Column()
        lastname:string;


        @Column()
        age:number;

        @Column()
        gender:string;

        @Column()
        status:number;

        @ManyToOne(() => userdetail , details => details.users)
        details:userdetail;
       

}
