import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Dresseur } from "./Dresseur";
import { Lieux } from "./Lieux";

@Index("uuidDresseur", ["uuidDresseur"], {})
@Entity("LIST_DRESSEUR_IN_ZONE", { schema: "burnel12u_pokemon2" })
export class ListDresseurInZone {
  @PrimaryGeneratedColumn({ type: "int", name: "uuidList" })
  uuidList: number;

  @Column("int", { primary: true, name: "uuidDresseur" })
  uuidDresseur: number;

  @ManyToOne(() => Dresseur, (dresseur) => dresseur.listDresseurInZones, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidDresseurDeux", referencedColumnName: "uuid" }])
  uuidDresseurDeux: Dresseur;

  @OneToMany(() => Lieux, (lieux) => lieux.uuidListDresseurInZoneDeux)
  lieuxes: Lieux[];
}
