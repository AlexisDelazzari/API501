import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DefaultPokemon } from "./DefaultPokemon";
import { Lieux } from "./Lieux";

@Index("idPokemon", ["idPokemon"], {})
@Entity("LIST_POKEMON_IN_ZONE", { schema: "burnel12u_pokemon2" })
export class ListPokemonInZone {
  @PrimaryGeneratedColumn({ type: "int", name: "uuidList" })
  uuidList: number;

  @Column("int", { primary: true, name: "idPokemon" })
  idPokemon: number;

  @Column("int", { name: "taux" })
  taux: number;

  @ManyToOne(
    () => DefaultPokemon,
    (defaultPokemon) => defaultPokemon.listPokemonInZones,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "idPokemon", referencedColumnName: "id" }])
  idPokemon2: DefaultPokemon;

  @OneToMany(() => Lieux, (lieux) => lieux.uuidListPokemonInzone2)
  lieuxes: Lieux[];
}
