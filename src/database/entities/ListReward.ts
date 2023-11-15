import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Item } from "./Item";

@Index("uuidItem", ["uuidItem"], {})
@Entity("LIST_REWARD", { schema: "burnel12u_pokemon2" })
export class ListReward {
  @Column("int", { primary: true, name: "uuidList" })
  uuidList: number;

  @Column("int", { primary: true, name: "uuidItem" })
  uuidItem: number;

  @ManyToOne(() => Item, (item) => item.listRewards, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidItem", referencedColumnName: "uuid" }])
  uuidItem2: Item;
}
