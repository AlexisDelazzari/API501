import { Column, Entity, OneToMany } from "typeorm";
import { Attaque } from "./Attaque";
import { DefaultPokemon } from "./DefaultPokemon";

@Entity("TYPE", { schema: "burnel12u_pokemon2" })
export class Type {
  @Column("int", { primary: true, name: "uuid" })
  uuid: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @OneToMany(() => Attaque, (attaque) => attaque.uuidType2)
  attaques: Attaque[];

  @OneToMany(() => DefaultPokemon, (defaultPokemon) => defaultPokemon.uuidType)
  defaultPokemon: DefaultPokemon[];

  @OneToMany(() => DefaultPokemon, (defaultPokemon) => defaultPokemon.uuidType3)
  defaultPokemon2: DefaultPokemon[];
}
