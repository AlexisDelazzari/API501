import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {NatureEntity} from "./Nature.entity";

@Entity()
export class NatureEffetEntity {
    @PrimaryGeneratedColumn()
    uuidEffet: number;

    @Column({ type: 'varchar', length: 200 })
    stat: string;

    @Column({ type: 'decimal', precision: 2, scale: 1 })
    multiplicateur: number;

    @ManyToOne(type => NatureEntity, nature => nature.uuid)
    @JoinColumn({ name: 'uuidNature', referencedColumnName: 'uuid' })
    nature?: NatureEntity;
}