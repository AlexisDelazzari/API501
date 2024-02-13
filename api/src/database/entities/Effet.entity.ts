import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {StatusEntity} from "./Status.entity";

@Entity()
export class EffetEntity {
    @PrimaryGeneratedColumn()
    uuid: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'longtext' })
    image: string;
}