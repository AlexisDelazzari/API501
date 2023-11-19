import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {ItemEntity} from "./Item.entity";

@Entity()
export class ListItemDropEntity {
    @PrimaryGeneratedColumn()
    uuidList: number;

    @Column({ type: 'decimal', precision: 4, scale: 2 })
    taux: number;

    @Column({ type: 'int' })
    min: number;

    @Column({ type: 'int' })
    max: number;

    @ManyToOne(type => ItemEntity, item => item.uuid)
    @JoinColumn({ name: 'uuidItem', referencedColumnName: 'uuid' })
    item?: ItemEntity;
}