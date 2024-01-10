import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {DefaultPokemonEntity} from "./DefaultPokemon.entity";
import {TalentEffetEntity} from "./TalentEffet.entity";
import {ListAttaqueEntity} from "./ListAttaque.entity";
import {StatusEntity} from "./Status.entity";
import {DresseurEntity} from "./Dresseur.entity";
import {NatureEntity} from "./Nature.entity";

@Entity()
export class PokemonEntity {
    @PrimaryGeneratedColumn()
    uuid: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'int' })
    level: number;

    @Column({ type: 'int' })
    currentXp: number;

    @Column({ type: 'int' })
    pvActuel: number;

    @Column({ type: 'varchar', length: 50 })
    sexe: string;

    @Column({ type: 'int' })
    xpNextLevel: number;

    @ManyToOne(type => DefaultPokemonEntity, defaultPokemon => defaultPokemon.id)
    @JoinColumn({ name: 'uuidDefaultPokemon', referencedColumnName: 'id' })
    defaultPokemon?: DefaultPokemonEntity;

    @ManyToOne(type => TalentEffetEntity, talentEffet => talentEffet.uuid)
    @JoinColumn({ name: 'uuidTalent', referencedColumnName: 'uuid' })
    talent?: TalentEffetEntity;

    @ManyToOne(type => ListAttaqueEntity, listAttaque => listAttaque.uuidList)
    @JoinColumn({ name: 'uuidListAttaque', referencedColumnName: 'uuidList' })
    listAttaque?: ListAttaqueEntity;

    @ManyToOne(type => StatusEntity, status => status.uuid)
    @JoinColumn({ name: 'uuidStatus', referencedColumnName: 'uuid' })
    status?: StatusEntity;

    @ManyToOne(type => DresseurEntity, dresseur => dresseur.uuid)
    @JoinColumn({ name: 'uuidProprietaire', referencedColumnName: 'uuid' })
    proprietaire?: DresseurEntity;

    @ManyToOne(type => NatureEntity, nature => nature.uuid)
    @JoinColumn({ name: 'uuidNature', referencedColumnName: 'uuid' })
    nature?: NatureEntity;

}