import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ListItemInZone } from "./ListItemInZone";
import { ListItemDrop } from "./ListItemDrop";
import { ListReward } from "./ListReward";

@Entity("ITEM", { schema: "burnel12u_pokemon2" })
export class Item {
  @PrimaryGeneratedColumn({ type: "int", name: "uuid" })
  uuid: number;

  @Column("tinyint", { name: "canBeFound", nullable: true, width: 1 })
  canBeFound: boolean | null;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @OneToMany(() => ListItemInZone, (listItemInZone) => listItemInZone.uuidItemDeux)
  listItemInZones: ListItemInZone[];

  @OneToMany(() => ListItemDrop, (listItemDrop) => listItemDrop.uuidItemDeux)
  listItemDrops: ListItemDrop[];

  @OneToMany(() => ListReward, (listReward) => listReward.uuidItemDeux)
  listRewards: ListReward[];
}
