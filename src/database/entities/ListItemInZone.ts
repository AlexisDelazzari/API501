import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Item } from "./Item";
import { Lieux } from "./Lieux";

@Index("uuidItem", ["uuidItem"], {})
@Entity("LIST_ITEM_IN_ZONE", { schema: "burnel12u_pokemon2" })
export class ListItemInZone {
  @Column("int", { primary: true, name: "uuidList" })
  uuidList: number;

  @Column("int", { primary: true, name: "uuidItem" })
  uuidItem: number;

  @Column("int", { name: "positionX" })
  positionX: number;

  @Column("int", { name: "positionY" })
  positionY: number;

  @ManyToOne(() => Item, (item) => item.listItemInZones, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidItem", referencedColumnName: "uuid" }])
  uuidItem2: Item;

  @OneToMany(() => Lieux, (lieux) => lieux.uuidListItemInZone2)
  lieuxes: Lieux[];
}
