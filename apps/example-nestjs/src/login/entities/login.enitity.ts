import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Login{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: string;

    @Column()
    contraseña: string;

}

