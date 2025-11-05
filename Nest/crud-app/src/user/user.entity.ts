import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
