/* @PrimaryGeneratedColumn()
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
 */

import {EffetModels} from "./effet-models";
import {TypeModels} from "./type-models";
import {CategorieModels} from "./categorie-models";
import {CritiqueModels} from "./critique-models";

export class AttaqueModels {
    uuid: number;
    nom: string;
    niveau: number;
    puissance: number;
    pp: number;
    priorite: number;
    description: string;
    precision: number;
    attaqueEvol?: AttaqueModels | null;
    effet?: EffetModels;
    type?: TypeModels;
    categorie?: CategorieModels;
    critique?: CritiqueModels;

    constructor(
        uuid: number,
        nom: string,
        niveau: number,
        puissance: number,
        pp: number,
        priorite: number,
        description: string,
        precision: number,
        attaqueEvol?: AttaqueModels | null,
        effet?: EffetModels,
        type?: TypeModels,
        categorie?: CategorieModels,
        critique?: CritiqueModels
    ) {
        this.uuid = uuid;
        this.nom = nom;
        this.niveau = niveau;
        this.puissance = puissance;
        this.pp = pp;
        this.priorite = priorite;
        this.description = description;
        this.precision = precision;
        this.attaqueEvol = attaqueEvol;
        this.effet = effet;
        this.type = type;
        this.categorie = categorie;
        this.critique = critique;
    }
}
