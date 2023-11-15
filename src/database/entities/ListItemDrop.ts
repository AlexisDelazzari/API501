import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Item } from "./Item";
import { DefaultPokemon } from "./DefaultPokemon";

@Index("uuidItem", ["uuidItem"], {})
@Entity("LIST_ITEM_DROP", { schema: "burnel12u_pokemon2" })
export class ListItemDrop {
  @PrimaryGeneratedColumn({ type: "int", name: "uuidList" })
  uuidList: number;

  @Column("int", { primary: true, name: "uuidItem" })
  uuidItem: number;

  @Column("decimal", { name: "taux", precision: 4, scale: 2 })
  taux: string;

  @Column("int", { name: "min" })
  min: number;

  @Column("int", { name: "max" })
  max: number;

  @ManyToOne(() => Item, (item) => item.listItemDrops, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidItemDeux", referencedColumnName: "uuid" }])
  uuidItemDeux: Item;

  @OneToMany(
    () => DefaultPokemon,
    (defaultPokemon) => defaultPokemon.uuidlistLoot2
  )
  defaultPokemon: DefaultPokemon[];
}
