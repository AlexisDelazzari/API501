import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Dresseur } from "./Dresseur";

@Index("uuidDresseur", ["uuidDresseur"], {})
@Entity("LIST_DRESSEUR", { schema: "burnel12u_pokemon2" })
export class ListDresseur {
  @Column("int", { primary: true, name: "uuidList" })
  uuidList: number;

  @Column("int", { primary: true, name: "uuidDresseur" })
  uuidDresseur: number;

  @ManyToOne(() => Dresseur, (dresseur) => dresseur.listDresseurs, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidDresseurDeux", referencedColumnName: "uuid" }])
  uuidDresseurDeux: Dresseur;
}
