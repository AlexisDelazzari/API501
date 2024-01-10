import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {TypeEntity} from "./Type.entity";
import {TalentEffetEntity} from "./TalentEffet.entity";
import {ListAttaqueEntity} from "./ListAttaque.entity";
import {LieuxEntity} from "./Lieux.entity";
import {ListItemDropEntity} from "./ListItemDrop.entity";

@Entity()
export class DefaultPokemonEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    image: string;

    @Column({ type: 'varchar', length: 11 })
    poids: string;

    @Column({ type: 'varchar', length: 255 })
    nom: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'int' })
    tauxCapture: number;

    @Column({ type: 'int' })
    pv: number;

    @Column({ type: 'int' })
    attaque: number;

    @Column({ type: 'int' })
    defense: number;

    @Column({ type: 'int' })
    attaqueSpeciale: number;

    @Column({ type: 'int' })
    vitesse: number;

    @Column({ type: 'int' })
    total: number;

    @Column({ type: 'int', nullable : true })
    xp: number;

    @Column({ type: 'int', nullable : true })
    niveauEvolution: number | null;

    @Column({ type: 'int' })
    defenseSpeciale: number;

    @Column({ type: 'varchar', length: 11 })
    taille: string;

    @ManyToOne(() => TypeEntity, (type) => type.uuid, {})
    @JoinColumn({ name: 'uuidType1', referencedColumnName: 'uuid' })
    type1?: TypeEntity;

    @ManyToOne(() => TypeEntity, (type) => type.uuid, {})
    @JoinColumn({ name: 'uuidType2', referencedColumnName: 'uuid' })
    type2?: TypeEntity;

    @ManyToOne(() => TalentEffetEntity, (talentEffet) => talentEffet.uuid, {})
    @JoinColumn({ name: 'uuidTalent1', referencedColumnName: 'uuid' })
    talent1?: TalentEffetEntity;

    @ManyToOne(() => TalentEffetEntity, (talentEffet) => talentEffet.uuid, {})
    @JoinColumn({ name: 'uuidTalent2', referencedColumnName: 'uuid' })
    talent2?: TalentEffetEntity;

    @ManyToOne(() => ListAttaqueEntity, (listAttaque) => listAttaque.uuidList, {})
    @JoinColumn({ name: 'uuidListAttaque', referencedColumnName: 'uuidList' })
    listAttaque?: ListAttaqueEntity;

    @ManyToOne(() => LieuxEntity, (lieux) => lieux.uuid, {})
    @JoinColumn({ name: 'uuidLieux', referencedColumnName: 'uuid' })
    lieux?: LieuxEntity;

    @ManyToOne(() => ListItemDropEntity, (listItemDrop) => listItemDrop.uuidList, {})
    @JoinColumn({ name: 'uuidListItemDrop', referencedColumnName: 'uuidList' })
    listItemDrop?: ListItemDropEntity;

    @ManyToOne(() => DefaultPokemonEntity, (defaultPokemon) => defaultPokemon.id, {})
    @JoinColumn({ name: 'idPokemonEvolution', referencedColumnName: 'id' })
    pokemonEvolution?: DefaultPokemonEntity;
}