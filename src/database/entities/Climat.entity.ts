import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity()
export class ClimatEntity {
    @PrimaryGeneratedColumn()
    uuid: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    description: string;

    @Column({ type: 'int' })
    time: number;
}