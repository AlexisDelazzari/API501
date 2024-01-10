import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {EffetEntity} from "./Effet.entity";
import {TypeEntity} from "./Type.entity";
import {CategorieEntity} from "./Categorie.entity";
import {CritiqueEntity} from "./Critique.entity";

@Entity()
export class AttaqueEntity {
    @PrimaryGeneratedColumn()
    uuid: number;

    @Column({ type: 'varchar', length: 200 })
    nom: string;

    @Column({ type: 'int' })
    niveau: number;

    @Column({ type: 'int', nullable: true })
    puissance: number;

    @Column({ type: 'int', nullable: true })
    pp: number;

    @Column({ type: 'int', nullable: true })
    priorite: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;

    @Column({ type: 'int' })
    precision: number;

    @ManyToOne(() => AttaqueEntity, (attaque) => attaque.uuid, {})
    @JoinColumn({ name: 'uuidAttaqueEvol', referencedColumnName: 'uuid' })
    attaqueEvol?: AttaqueEntity;

    @ManyToOne(() => EffetEntity, (effet) => effet.uuid, {})
    @JoinColumn({ name: 'uuidEffet', referencedColumnName: 'uuid' })
    effet?: EffetEntity;

    @ManyToOne(() => TypeEntity, (type) => type.uuid, {})
    @JoinColumn({ name: 'uuidType', referencedColumnName: 'uuid' })
    type?: TypeEntity;

    @ManyToOne(() => CategorieEntity, (categorie) => categorie.id, {})
    @JoinColumn({ name: 'uuidCategorie', referencedColumnName: 'id' })
    categorie?: CategorieEntity;

    @ManyToOne(() => CritiqueEntity, (critique) => critique.id, {})
    @JoinColumn({ name: 'uuidCritique', referencedColumnName: 'id' })
    critique?: CritiqueEntity;
}