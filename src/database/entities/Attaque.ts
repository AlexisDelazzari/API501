import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Effet } from "./Effet";
import { Type } from "./Type";
import { DefaultPokemon } from "./DefaultPokemon";
import { ListAttaque } from "./ListAttaque";

@Index("uuidAttaqueEvol", ["uuidAttaqueEvol"], {})
@Index("uuidEffet", ["uuidEffet"], {})
@Index("uuidType", ["uuidType"], {})
@Entity("ATTAQUE", { schema: "burnel12u_pokemon2" })
export class Attaque {
  @PrimaryGeneratedColumn({ type: "int", name: "uuid" })
  uuid: number;

  @Column("int", { primary: true, name: "uuidAttaqueEvol" })
  uuidAttaqueEvol: number;

  @Column("int", { primary: true, name: "uuidEffet" })
  uuidEffet: number;

  @Column("int", { primary: true, name: "uuidType" })
  uuidType: number;

  @Column("varchar", { name: "nom", length: 200 })
  nom: string;

  @Column("int", { name: "niveau" })
  niveau: number;

  @Column("int", { name: "puissance", nullable: true })
  puissance: number | null;

  @Column("int", { name: "pp", nullable: true })
  pp: number | null;

  @Column("varchar", { name: "uuidCategorie", nullable: true, length: 36 })
  uuidCategorie: string | null;

  @Column("int", { name: "uuidCritique", nullable: true })
  uuidCritique: number | null;

  @Column("int", { name: "priorite", nullable: true })
  priorite: number | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("int", { name: "precision" })
  precision: number;

  @ManyToOne(() => Attaque, (attaque) => attaque.attaques, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidAttaqueEvol", referencedColumnName: "uuid" }])
  uuidAttaqueEvolDeux: Attaque;

  @OneToMany(() => Attaque, (attaque) => attaque.uuidAttaqueEvolDeux)
  attaques: Attaque[];

  @ManyToOne(() => Effet, (effet) => effet.attaques, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidEffet", referencedColumnName: "uuid" }])
  uuidEffet2: Effet;

  @ManyToOne(() => Type, (type) => type.attaques, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidType", referencedColumnName: "uuid" }])
  uuidType2: Type;

  @OneToMany(
    () => DefaultPokemon,
    (defaultPokemon) => defaultPokemon.uuidListDefaultAttaque2
  )
  defaultPokemon: DefaultPokemon[];

  @OneToMany(() => ListAttaque, (listAttaque) => listAttaque.uuidAttaqueDeux)
  listAttaques: ListAttaque[];
}
