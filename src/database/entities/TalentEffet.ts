import { Column, Entity, OneToMany } from "typeorm";
import { DefaultPokemon } from "./DefaultPokemon";
import { Pokemon } from "./Pokemon";

@Entity("TALENT_EFFET", { schema: "burnel12u_pokemon2" })
export class TalentEffet {
  @Column("int", { primary: true, name: "uuid" })
  uuid: number;

  @Column("varchar", { name: "nom", length: 200 })
  nom: string;

  @Column("varchar", { name: "description", length: 255 })
  description: string;

  @OneToMany(
    () => DefaultPokemon,
    (defaultPokemon) => defaultPokemon.uuidTalent
  )
  defaultPokemon: DefaultPokemon[];

  @OneToMany(
    () => DefaultPokemon,
    (defaultPokemon) => defaultPokemon.uuidTalent3
  )
  defaultPokemon2: DefaultPokemon[];

  @OneToMany(() => Pokemon, (pokemon) => pokemon.uuidTalent2)
  pokemon: Pokemon[];
}
