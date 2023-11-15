import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("CRITIQUE", { schema: "burnel12u_pokemon2" })
export class Critique {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("decimal", {
    name: "probabilité",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  probabilit: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 200 })
  description: string | null;
}
