import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Status } from "./Status";

@Index("uuidStatus", ["uuidStatus"], {})
@Entity("STATUS_EFFET", { schema: "burnel12u_pokemon2" })
export class StatusEffet {
  @PrimaryGeneratedColumn({ type: "int", name: "uuidEffet" })
  uuidEffet: number;

  @Column("int", { primary: true, name: "uuidStatus" })
  uuidStatus: number;

  @Column("int", { name: "stat" })
  stat: number;

  @ManyToOne(() => Status, (status) => status.statusEffets, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "uuidStatus", referencedColumnName: "uuid" }])
  uuidStatus2: Status;
}
