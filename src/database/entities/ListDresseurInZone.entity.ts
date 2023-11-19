import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {DresseurEntity} from "./Dresseur.entity";

@Entity()
export class ListDresseurInZoneEntity {
    @PrimaryGeneratedColumn()
    uuidList: number;

    @ManyToOne(type => DresseurEntity, dresseur => dresseur.uuid)
    @JoinColumn({ name: 'uuidDresseur', referencedColumnName: 'uuid' })
    dresseur?: DresseurEntity;
}