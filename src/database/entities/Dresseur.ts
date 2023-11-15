import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ListDresseurInZone } from "./ListDresseurInZone";
import { Sac } from "./Sac";
import { Hero } from "./Hero";
import { ListDresseur } from "./ListDresseur";

@Index("uuidSac", ["uuidSac"], {})
@Entity("DRESSEUR", { schema: "burnel12u_pokemon2" })
export class Dresseur {
  @PrimaryGeneratedColumn({ type: "int", name: "uuid" })
  uuid: number;

  @Column("int", { primary: true, name: "uuidSac" })
  uuidSac: number;

  @Column("int", { name: "positionX" })
  positionX: number;

  @Column("int", { name: "positionY" })
  positionY: number;

  @Column("varchar", { name: "orientation", length: 50 })
  orientation: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("text", { name: "dialogue" })
  dialogue: string;

  @Column("int", { name: "rewardMoney" })
  rewardMoney: number;

  @Column("tinyint", { name: "isHero", width: 1 })
  isHero: boolean;

  @OneToMany(
    () => ListDresseurInZone,
    (listDresseurInZone) => listDresseurInZone.uuidDresseur2
  )
  listDresseurInZones: ListDresseurInZone[];

  @ManyToOne(() => Sac, (sac) => sac.dresseurs, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidSac", referencedColumnName: "uuidSac" }])
  uuidSac2: Sac;

  @OneToMany(() => Hero, (hero) => hero.uuidDresseur2)
  heroes: Hero[];

  @OneToMany(() => ListDresseur, (listDresseur) => listDresseur.uuidDresseur2)
  listDresseurs: ListDresseur[];
}
