import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Persona{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    direccion: string;

    @Column()
    telefono: string;
}

