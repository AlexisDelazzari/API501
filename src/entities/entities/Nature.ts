import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NatureEffet } from "./NatureEffet";
import { Pokemon } from "./Pokemon";

@Entity("NATURE", { schema: "burnel12u_pokemon2" })
export class Nature {
  @PrimaryGeneratedColumn({ type: "int", name: "uuid" })
  uuid: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @OneToMany(() => NatureEffet, (natureEffet) => natureEffet.uuidNature2)
  natureEffets: NatureEffet[];

  @OneToMany(() => Pokemon, (pokemon) => pokemon.uuidNature2)
  pokemon: Pokemon[];
}
