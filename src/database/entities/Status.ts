import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pokemon } from "./Pokemon";
import { StatusEffet } from "./StatusEffet";

@Entity("STATUS", { schema: "burnel12u_pokemon2" })
export class Status {
  @PrimaryGeneratedColumn({ type: "int", name: "uuid" })
  uuid: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "description", length: 255 })
  description: string;

  @OneToMany(() => Pokemon, (pokemon) => pokemon.uuidStatus2)
  pokemon: Pokemon[];

  @OneToMany(() => StatusEffet, (statusEffet) => statusEffet.uuidStatus2)
  statusEffets: StatusEffet[];
}
