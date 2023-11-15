import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ARENE", { schema: "burnel12u_pokemon2" })
export class Arene {
  @PrimaryGeneratedColumn({ type: "int", name: "uuid" })
  uuid: number;

  @Column("varchar", { name: "uuidListDresseur", length: 36 })
  uuidListDresseur: string;

  @Column("varchar", { name: "uuidListReward", length: 36 })
  uuidListReward: string;

  @Column("varchar", { name: "uuidChampion", length: 36 })
  uuidChampion: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;
}
