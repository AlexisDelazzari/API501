import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DefaultPokemon } from "./DefaultPokemon";
import { TalentEffet } from "./TalentEffet";
import { ListAttaque } from "./ListAttaque";
import { Status } from "./Status";
import { Hero } from "./Hero";
import { Nature } from "./Nature";

@Index("idDefaultPokemon", ["idDefaultPokemon"], {})
@Index("uuidTalent", ["uuidTalent"], {})
@Index("uuidListAttaque", ["uuidListAttaque"], {})
@Index("uuidStatus", ["uuidStatus"], {})
@Index("uuidProprietaire", ["uuidProprietaire"], {})
@Index("uuidNature", ["uuidNature"], {})
@Entity("POKEMON", { schema: "burnel12u_pokemon2" })
export class Pokemon {
  @PrimaryGeneratedColumn({ type: "int", name: "uuid" })
  uuid: number;

  @Column("int", { primary: true, name: "idDefaultPokemon" })
  idDefaultPokemon: number;

  @Column("int", { primary: true, name: "uuidTalent" })
  uuidTalent: number;

  @Column("int", { primary: true, name: "uuidListAttaque" })
  uuidListAttaque: number;

  @Column("int", { primary: true, name: "uuidStatus" })
  uuidStatus: number;

  @Column("int", { primary: true, name: "uuidProprietaire" })
  uuidProprietaire: number;

  @Column("int", { primary: true, name: "uuidNature" })
  uuidNature: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("int", { name: "level" })
  level: number;

  @Column("int", { name: "currentXp" })
  currentXp: number;

  @Column("int", { name: "pvActuel" })
  pvActuel: number;

  @Column("varchar", { name: "sexe", length: 50 })
  sexe: string;

  @Column("int", { name: "xpNextLevel" })
  xpNextLevel: number;

  @ManyToOne(() => DefaultPokemon, (defaultPokemon) => defaultPokemon.pokemon, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "idDefaultPokemonDeux", referencedColumnName: "id" }])
  idDefaultPokemonDeux: DefaultPokemon;

  @ManyToOne(() => TalentEffet, (talentEffet) => talentEffet.pokemon, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidTalentDeux", referencedColumnName: "uuid" }])
  uuidTalentDeux: TalentEffet;

  @ManyToOne(() => ListAttaque, (listAttaque) => listAttaque.pokemon, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([
    { name: "uuidListAttaqueDeux", referencedColumnName: "uuidAttaque" },
  ])
  uuidListAttaqueDeux: ListAttaque;

  @ManyToOne(() => Status, (status) => status.pokemon, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidStatusDeux", referencedColumnName: "uuid" }])
  uuidStatusDeux: Status;

  @ManyToOne(() => Hero, (hero) => hero.pokemon, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidProprietaireDeux", referencedColumnName: "uuid" }])
  uuidProprietaireDeux: Hero;

  @ManyToOne(() => Nature, (nature) => nature.pokemon, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidNatureDeux", referencedColumnName: "uuid" }])
  uuidNatureDeux: Nature;
}
