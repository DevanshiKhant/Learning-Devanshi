import { Entity  ,PrimaryGeneratedColumn  ,Column, OneToOne, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { user } from "../user/user.entity";


@Entity()
export class userdetail{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstname:string;

    @Column()
    lastname:string;

    @Column()
    mobileno:string;

    @Column()
    gender:string;

    @Column()
    city:string
   

    @OneToMany(() => user, users => users.details)
    @JoinColumn()
    users:user;

}