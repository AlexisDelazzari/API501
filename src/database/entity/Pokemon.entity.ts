import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class PokemonEntity {

    @PrimaryGeneratedColumn()
    uuid: number

    @Column()
    idDefaultPokemon: number

    @Column()
    uuidTalent1: string

    @Column()
    uuidTalent2: string

    @Column()
    uuidListAttaque: string

    @Column()
    uuidStatus: string

    @Column()
    uuidProprietaire: string

    @Column()
    uuidNature: string

    @Column()
    name: string

    @Column()
    level: number

    @Column()
    currentXp: number

    @Column()
    xpToNextLevel: number

    @Column()
    pvActuel: number

    @Column()
    sexe: string
}