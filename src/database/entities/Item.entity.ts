import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity()
export class ItemEntity {
    @PrimaryGeneratedColumn()
    uuid: number;

    @Column({ type: 'boolean', nullable: true })
    canBeFound: boolean;

    @Column({ type: 'varchar', length: 255 })
    name: string;
}