import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Dresseur } from "./Dresseur";

@Entity("SAC", { schema: "burnel12u_pokemon2" })
export class Sac {
  @PrimaryGeneratedColumn({ type: "int", name: "uuidSac" })
  uuidSac: number;

  @OneToMany(() => Dresseur, (dresseur) => dresseur.uuidSacDeux)
  dresseurs: Dresseur[];
}
