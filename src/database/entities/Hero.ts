import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pokemon } from "./Pokemon";
import { Dresseur } from "./Dresseur";

@Index("uuidDresseur", ["uuidDresseur"], {})
@Entity("HERO", { schema: "burnel12u_pokemon2" })
export class Hero {
  @PrimaryGeneratedColumn({ type: "int", name: "uuid" })
  uuid: number;

  @Column("int", { primary: true, name: "uuidDresseur" })
  uuidDresseur: number;

  @Column("int", { name: "money" })
  money: number;

  @Column("int", { name: "age" })
  age: number;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "idConnexion", length: 255 })
  idConnexion: string;

  @Column("int", { name: "sexe" })
  sexe: number;

  @Column("int", { name: "hourPlay" })
  hourPlay: number;

  @OneToMany(() => Pokemon, (pokemon) => pokemon.uuidProprietaireDeux)
  pokemon: Pokemon[];

  @ManyToOne(() => Dresseur, (dresseur) => dresseur.heroes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidDresseurDeux", referencedColumnName: "uuid" }])
  uuidDresseurDeux: Dresseur;
}
