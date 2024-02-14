import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    PrimaryColumn,
} from 'typeorm';
import {AttaqueEntity} from "./Attaque.entity";
import {DefaultPokemonEntity} from "./DefaultPokemon.entity";

@Entity()
export class ListAttaqueEntity {
    @PrimaryGeneratedColumn()
    uuidList: number;

    @PrimaryColumn( { type: 'int' })
    idAttaque: number;

    @Column({ type: 'int' })
    Niveau: number;


    @ManyToOne(type => AttaqueEntity, attaque => attaque.uuid)
    @JoinColumn({ name: 'uuidAttaque', referencedColumnName: 'uuid' })
    attaque?: AttaqueEntity;

    @ManyToOne(() => DefaultPokemonEntity, (defaultPokemon) => defaultPokemon.listAttaques)
    @JoinColumn({ name: 'defaultPokemonId', referencedColumnName: 'id' })
    defaultPokemon?: DefaultPokemonEntity;
}