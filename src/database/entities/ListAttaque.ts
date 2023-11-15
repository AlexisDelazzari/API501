import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Attaque } from "./Attaque";
import { Pokemon } from "./Pokemon";

@Index("uuidAttaque", ["uuidAttaque"], {})
@Entity("LIST_ATTAQUE", { schema: "burnel12u_pokemon2" })
export class ListAttaque {
  @PrimaryGeneratedColumn({ type: "int", name: "uuidList" })
  uuidList: number;

  @Column("int", { primary: true, name: "uuidAttaque" })
  uuidAttaque: number;

  @Column("int", { name: "Niveau" })
  niveau: number;

  @ManyToOne(() => Attaque, (attaque) => attaque.listAttaques, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidAttaqueDeux", referencedColumnName: "uuid" }])
  uuidAttaqueDeux: Attaque;

  @OneToMany(() => Pokemon, (pokemon) => pokemon.uuidListAttaqueDeux)
  pokemon: Pokemon[];
}
