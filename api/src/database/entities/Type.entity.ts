import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity()
export class TypeEntity {
    @PrimaryGeneratedColumn()
    uuid: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'longtext' })
    image: string;

    @Column({ type: 'varchar', length: 255 })
    description: string;
}