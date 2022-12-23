import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'users'})
export class User{
    @PrimaryGeneratedColumn({type:'int'})
    public readonly id: number;
    @Column({type:'varchar'})
    public username: string;
    @Column({type:'varchar'})
    public password: string;
    @Column ({type:'varchar', default:'https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet-700x695.jpg'})
    public avatar: string;
    @Column({type:'varchar'})
    public role: string;
    @Column({type:'varchar'})
    public status: string;
}