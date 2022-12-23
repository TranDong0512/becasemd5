import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'comments'})
export class Comment{
    @PrimaryGeneratedColumn({type:'int'})
    public readonly idC: number;
    @Column({type:'varchar'})
    public content: string;
    @Column({type: 'int'})
    public idUser: number;
    @Column({type: 'int'})
    public idBlog: number;
    @Column({type:'varchar'})
    public time: string;
}