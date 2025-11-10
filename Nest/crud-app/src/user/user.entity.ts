import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { userdetail } from "src/userdetail/userdetail.entity";

@Entity('users')
export class user {
        @PrimaryGeneratedColumn()
        id:number;

        @Column()
        email:string;

        @Column()
        password:number;

        @Column()
        status:number;

        @ManyToOne(() => userdetail , (details) => details.users , { cascade: true, eager: true })
        @JoinColumn()
        details : userdetail;
}
