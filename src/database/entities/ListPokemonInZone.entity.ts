import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {PokemonEntity} from "./Pokemon.entity";

@Entity()
export class ListPokemonInZoneEntity {
    @PrimaryGeneratedColumn()
    uuidList: number;

    @Column({ type: 'int' })
    taux: number;

    @ManyToOne(type => PokemonEntity, pokemon => pokemon.uuid)
    @JoinColumn({ name: 'uuidPokemon', referencedColumnName: 'uuid' })
    pokemon?: PokemonEntity;
}