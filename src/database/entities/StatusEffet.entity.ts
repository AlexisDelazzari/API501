import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {StatusEntity} from "./Status.entity";

@Entity()
export class StatusEffetEntity {
    @PrimaryGeneratedColumn()
    uuidEffet: number;

    @Column({ type: 'int' })
    stat: number;

    @ManyToOne(type => StatusEntity, status => status.uuid)
    @JoinColumn({ name: 'uuidStatus', referencedColumnName: 'uuid' })
    status?: StatusEntity;
}