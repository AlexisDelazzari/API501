import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "DEFAULT_POKEMON" })
export class DEFAULT_POKEMON {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    uuidType1: string

    @Column()
    uuidType2: string

    @Column()
    uuidTalent1: string

    @Column()
    uuidTalent2: string

    @Column()
    uuidListDefaultAttaque: string

    @Column()
    uuidLieux: string

    @Column()
    uuidlistLoot: string

    @Column()
    idPokemonEvolution: number

    @Column()
    image: string

    @Column()
    poids: number

    @Column()
    nom: string

    @Column()
    description: string

    @Column()
    tauxCapture: number

    @Column()
    pv: number

    @Column()
    attaque: number

    @Column()
    defense: number

    @Column()
    attaqueSpeciale: number

    @Column()
    defenseSpeciale: number
    
    @Column()
    vitesse: number

    @Column()
    total: number

    @Column()
    xp: number

    @Column()
    niveauEvolution: number


}