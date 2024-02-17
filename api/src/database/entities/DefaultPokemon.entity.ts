import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn, ManyToMany, OneToMany,
} from 'typeorm';
import {TypeEntity} from "./Type.entity";
import {TalentEffetEntity} from "./TalentEffet.entity";
import {ListAttaqueEntity} from "./ListAttaque.entity";
import {LieuxEntity} from "./Lieux.entity";
import {ListItemDropEntity} from "./ListItemDrop.entity";
import {DresseurEntity} from "./Dresseur.entity";

@Entity()
export class DefaultPokemonEntity {
    @PrimaryGeneratedColumn()
    id: number = null;

    @Column({ type: "longtext", nullable: true })
    image: string = null;

    @Column({ type: 'varchar', length: 11, nullable: true })
    poids: string = null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    nom: string = null;

    @Column({ type: 'text', nullable: true })
    description: string = null;

    @Column({ type: 'int', nullable: true })
    tauxCapture: number = null;

    @Column({ type: 'int', nullable: true })
    pv: number = null;

    @Column({ type: 'int', nullable: true })
    attaque: number = null;

    @Column({ type: 'int', nullable: true })
    defense: number = null;

    @Column({ type: 'int', nullable: true })
    attaqueSpeciale: number = null;

    @Column({ type: 'int', nullable: true })
    vitesse: number = null;

    @Column({ type: 'int', nullable: true })
    total: number = null;

    @Column({ type: 'int', nullable: true })
    xp: number = null;

    @Column({ type: 'int', nullable: true })
    niveauEvolution: number | null = null;

    @Column({ type: 'int', nullable: true })
    defenseSpeciale: number = null;

    @Column({ type: 'varchar', length: 11, nullable: true })
    taille: string = null;

    @Column({ type: 'boolean', nullable: true })
    hasHero: boolean

    @Column({ type: 'varchar', length: 255, nullable: true })
    proprietaire: string

    @ManyToOne(() => TypeEntity, (type) => type.uuid)
    @JoinColumn({ name: 'uuidType1', referencedColumnName: 'uuid' })
    type1?: TypeEntity

    @ManyToOne(() => TypeEntity, (type) => type.uuid)
    @JoinColumn({ name: 'uuidType2', referencedColumnName: 'uuid' })
    type2?: TypeEntity

    @ManyToOne(() => TalentEffetEntity, (talentEffet) => talentEffet.uuid, { nullable: true })
    @JoinColumn({ name: 'uuidTalent1', referencedColumnName: 'uuid' })
    talent1?: TalentEffetEntity = null; // Valeur par défaut null

    @ManyToOne(() => TalentEffetEntity, (talentEffet) => talentEffet.uuid, { nullable: true })
    @JoinColumn({ name: 'uuidTalent2', referencedColumnName: 'uuid' })
    talent2?: TalentEffetEntity = null; // Valeur par défaut null

    @OneToMany(() => ListAttaqueEntity, (listAttaque) => listAttaque.defaultPokemon)
    listAttaques?: ListAttaqueEntity[];

    @ManyToOne(() => LieuxEntity, (lieux) => lieux.uuid, { nullable: true })
    @JoinColumn({ name: 'uuidLieux', referencedColumnName: 'uuid' })
    lieux?: LieuxEntity = null;

    @ManyToOne(() => ListItemDropEntity, (listItemDrop) => listItemDrop.uuidList, { nullable: true })
    @JoinColumn({ name: 'uuidListItemDrop', referencedColumnName: 'uuidList' })
    listItemDrop?: ListItemDropEntity = null;

    @ManyToOne(() => DefaultPokemonEntity, (defaultPokemon) => defaultPokemon.id, { nullable: true })
    @JoinColumn({ name: 'idPokemonEvolution', referencedColumnName: 'id' })
    pokemonEvolution?: DefaultPokemonEntity = null;
}
