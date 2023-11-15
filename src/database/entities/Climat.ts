import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("CLIMAT", { schema: "burnel12u_pokemon2" })
export class Climat {
  @PrimaryGeneratedColumn({ type: "int", name: "uuid" })
  uuid: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "description", length: 255 })
  description: string;

  @Column("int", { name: "time" })
  time: number;
}
