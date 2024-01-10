import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {ItemEntity} from "./Item.entity";

@Entity()
export class ListRewardEntity {
    @PrimaryGeneratedColumn()
    uuidList: number;

    @ManyToOne(type => ItemEntity, item => item.uuid)
    @JoinColumn({ name: 'uuidItem', referencedColumnName: 'uuid' })
    item?: ItemEntity;
}