import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { ListPokemonInZone } from "./ListPokemonInZone";
import { Type } from "./Type";
import { TalentEffet } from "./TalentEffet";
import { Attaque } from "./Attaque";
import { Lieux } from "./Lieux";
import { ListItemDrop } from "./ListItemDrop";
import { Pokemon } from "./Pokemon";
import {ListAttaque} from "./ListAttaque";

@Index("uuidType1", ["uuidType1"], {})
@Index("uuidType2", ["uuidType2"], {})
@Index("uuidTalent1", ["uuidTalent1"], {})
@Index("uuidTalent2", ["uuidTalent2"], {})
@Index("uuidListDefaultAttaque", ["uuidListDefaultAttaque"], {})
@Index("uuidLieux", ["uuidLieux"], {})
@Index("uuidlistLoot", ["uuidlistLoot"], {})
@Index("idPokemonEvolution", ["idPokemonEvolution"], {})
@Entity("DEFAULT_POKEMON", { schema: "burnel12u_pokemon2" })
export class DefaultPokemon {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("int", { primary: true, name: "uuidType1" })
  uuidType1: number;

  @Column("int", { primary: true, name: "uuidType2" })
  uuidType2: number;

  @Column("int", { primary: true, name: "uuidTalent1" })
  uuidTalent1: number;

  @Column("int", { primary: true, name: "uuidTalent2" })
  uuidTalent2: number;

  @Column("int", { primary: true, name: "uuidListDefaultAttaque" })
  uuidListDefaultAttaque: number;

  @Column("int", { primary: true, name: "uuidLieux" })
  uuidLieux: number;

  @Column("int", { primary: true, name: "uuidlistLoot" })
  uuidlistLoot: number;

  @Column("int", { primary: true, name: "idPokemonEvolution" })
  idPokemonEvolution: number;

  @Column("varchar", { name: "image", length: 255 })
  image: string;

  @Column("varchar", { name: "poids", length: 11 })
  poids: string;

  @Column("varchar", { name: "nom", length: 255 })
  nom: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("int", { name: "tauxCapture" })
  tauxCapture: number;

  @Column("int", { name: "pv" })
  pv: number;

  @Column("int", { name: "attaque" })
  attaque: number;

  @Column("int", { name: "defense" })
  defense: number;

  @Column("int", { name: "attaqueSpeciale" })
  attaqueSpeciale: number;

  @Column("int", { name: "vitesse" })
  vitesse: number;

  @Column("int", { name: "total" })
  total: number;

  @Column("int", { name: "xp" })
  xp: number;

  @Column("int", { name: "niveauEvolution" })
  niveauEvolution: number;

  @Column("int", { name: "defenseSpeciale" })
  defenseSpeciale: number;

  @Column("varchar", { name: "taille", length: 11 })
  taille: string;

  @OneToMany(
    () => ListPokemonInZone,
    (listPokemonInZone) => listPokemonInZone.idPokemonDeux
  )
  listPokemonInZones: ListPokemonInZone[];

  @ManyToOne(() => Type, (type) => type.defaultPokemon, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidTypeUn", referencedColumnName: "uuid" }])
  uuidTypeUn: Type;

  @ManyToOne(() => Type, (type) => type.defaultPokemon2, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidTypeDeux", referencedColumnName: "uuid" }])
  uuidTypeDeux: Type;

  @ManyToOne(() => TalentEffet, (talentEffet) => talentEffet.defaultPokemon, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidTalentUn", referencedColumnName: "uuid" }])
  uuidTalentUn: TalentEffet;

  @ManyToOne(() => TalentEffet, (talentEffet) => talentEffet.defaultPokemon2, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidTalentDeux", referencedColumnName: "uuid" }])
  uuidTalentDeux: TalentEffet;

  @ManyToOne(() => ListAttaque, (listAttaque) => listAttaque.uuidList, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([
    { name: "uuidListDefaultAttaqueDeux", referencedColumnName: "uuidList" },
  ])
  uuidListDefaultAttaqueDeux: Attaque; 

  @ManyToOne(() => Lieux, (lieux) => lieux.defaultPokemon, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidLieuxDeux", referencedColumnName: "uuid" }])
  uuidLieuxDeux: Lieux;

  @ManyToOne(
    () => ListItemDrop,
    (listItemDrop) => listItemDrop.defaultPokemon,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "uuidlistLootDeux", referencedColumnName: "uuidList" }])
  uuidlistLootDeux: ListItemDrop;

  @ManyToOne(
    () => DefaultPokemon,
    (defaultPokemon) => defaultPokemon.defaultPokemon,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "idPokemonEvolutionDeux", referencedColumnName: "id" }])
  idPokemonEvolutionDeux: DefaultPokemon;

  @OneToMany(
    () => DefaultPokemon,
    (defaultPokemon) => defaultPokemon.idPokemonEvolutionDeux
  )
  defaultPokemon: DefaultPokemon[];

  @OneToMany(() => Pokemon, (pokemon) => pokemon.idDefaultPokemonDeux)
  pokemon: Pokemon[];
}
