import { Entity  ,PrimaryGeneratedColumn  ,Column, OneToOne, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { user } from "./user.entity";


@Entity()
export class userdetail{
    @PrimaryGeneratedColumn()
    detail_id:number;

    @Column()
    city:string;

    @Column()
    mobileno:number;

    @Column()
    state:string;

    @OneToMany(() => user, users => users.details)
    users:user;

}