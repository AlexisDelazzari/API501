import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("CATEGORIE", { schema: "burnel12u_pokemon2" })
export class Categorie {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "info", length: 100 })
  info: string;
}
