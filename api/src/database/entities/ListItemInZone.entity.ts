import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {ItemEntity} from "./Item.entity";

@Entity()
export class ListItemInZoneEntity {
    @PrimaryGeneratedColumn()
    uuidList: number;

    @Column({ type: 'int' })
    positionX: number;

    @Column({ type: 'int' })
    positionY: number;

    @ManyToOne(type => ItemEntity, item => item.uuid)
    @JoinColumn({ name: 'uuidItem', referencedColumnName: 'uuid' })
    item?: ItemEntity;
}