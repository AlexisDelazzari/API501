import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Attaque } from "./Attaque";

@Entity("EFFET", { schema: "burnel12u_pokemon2" })
export class Effet {
  @PrimaryGeneratedColumn({ type: "int", name: "uuid" })
  uuid: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("int", { name: "uuidStatus" })
  uuidStatus: number;

  @OneToMany(() => Attaque, (attaque) => attaque.uuidEffet2)
  attaques: Attaque[];
}
