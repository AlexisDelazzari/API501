import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DefaultPokemon } from "./DefaultPokemon";
import { ListDresseurInZone } from "./ListDresseurInZone";
import { ListItemInZone } from "./ListItemInZone";
import { ListPokemonInZone } from "./ListPokemonInZone";

@Index("uuidListDresseurInZone", ["uuidListDresseurInZone"], {})
@Index("uuidListItemInZone", ["uuidListItemInZone"], {})
@Index("uuidListPokemonInzone", ["uuidListPokemonInzone"], {})
@Entity("LIEUX", { schema: "burnel12u_pokemon2" })
export class Lieux {
  @PrimaryGeneratedColumn({ type: "int", name: "uuid" })
  uuid: number;

  @Column("int", { primary: true, name: "uuidListPokemonInzone" })
  uuidListPokemonInzone: number;

  @Column("int", { primary: true, name: "uuidListDresseurInZone" })
  uuidListDresseurInZone: number;

  @Column("int", { primary: true, name: "uuidListItemInZone" })
  uuidListItemInZone: number;

  @Column("varchar", { name: "nom", length: 255 })
  nom: string;

  @OneToMany(
    () => DefaultPokemon,
    (defaultPokemon) => defaultPokemon.uuidLieux2
  )
  defaultPokemon: DefaultPokemon[];

  @ManyToOne(
    () => ListDresseurInZone,
    (listDresseurInZone) => listDresseurInZone.lieuxes,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "uuidListDresseurInZoneDeux", referencedColumnName: "uuidList" },
  ])
  uuidListDresseurInZoneDeux: ListDresseurInZone;

  @ManyToOne(() => ListItemInZone, (listItemInZone) => listItemInZone.lieuxes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([
    { name: "uuidListItemInZoneDeux", referencedColumnName: "uuidList" },
  ])
  uuidListItemInZoneDeux: ListItemInZone;

  @ManyToOne(
    () => ListPokemonInZone,
    (listPokemonInZone) => listPokemonInZone.lieuxes,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "uuidListPokemonInzoneDeux", referencedColumnName: "uuidList" },
  ])
  uuidListPokemonInzoneDeux: ListPokemonInZone;
}
