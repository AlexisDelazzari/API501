import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {ListPokemonInZoneEntity} from "./ListPokemonInZone.entity";
import {ListItemInZoneEntity} from "./ListItemInZone.entity";
import {ListDresseurInZoneEntity} from "./ListDresseurInZone.entity";

@Entity()
export class LieuxEntity {
    @PrimaryGeneratedColumn()
    uuid: number;

    @Column({ type: 'varchar', length: 255 })
    nom: string;

    @ManyToOne(() => ListPokemonInZoneEntity, listPokemonInZone => listPokemonInZone.uuidList)
    @JoinColumn({ name: 'uuidListPokemonInZone' , referencedColumnName: 'uuidList'})
    listPokemonInZone: ListPokemonInZoneEntity;

    @ManyToOne(() => ListItemInZoneEntity, listItemInZone => listItemInZone.uuidList)
    @JoinColumn({ name: 'uuidListItemInZone' , referencedColumnName: 'uuidList'})
    listItemInZone: ListItemInZoneEntity;

    @ManyToOne(() => ListDresseurInZoneEntity, listDresseurInZone => listDresseurInZone.uuidList)
    @JoinColumn({ name: 'uuidListDresseurInZone' , referencedColumnName: 'uuidList'})
    listDresseurInZone: ListDresseurInZoneEntity;
}