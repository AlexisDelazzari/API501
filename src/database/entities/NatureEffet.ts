import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Nature } from "./Nature";

@Index("uuidNature", ["uuidNature"], {})
@Entity("NATURE_EFFET", { schema: "burnel12u_pokemon2" })
export class NatureEffet {
  @Column("int", { primary: true, name: "uuidEffet" })
  uuidEffet: number;

  @Column("int", { primary: true, name: "uuidNature" })
  uuidNature: number;

  @Column("varchar", { name: "stat", length: 200 })
  stat: string;

  @Column("decimal", { name: "multiplicateur", precision: 2, scale: 1 })
  multiplicateur: string;

  @ManyToOne(() => Nature, (nature) => nature.natureEffets, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidNatureDeux", referencedColumnName: "uuid" }])
  uuidNatureDeux: Nature;
}
