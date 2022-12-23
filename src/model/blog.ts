import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'blogs'})
export class Blog {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly id: number;

    @Column({type: 'varchar'})
    public tittle: string;

    @Column({type: 'varchar'})
    public content: string;

    @Column({type: 'int'})
    public idUser: number;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    public time: string;

    @Column({type: 'varchar',default:"true"})
    public status: string;

    @Column({type: 'int',default:0})
    public likes: number;

    @Column({type: 'varchar',default:"như c"})
    public comments: string;

    @Column ({type:'varchar'})
    public image: string;
}