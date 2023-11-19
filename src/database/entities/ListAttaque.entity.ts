import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {AttaqueEntity} from "./Attaque.entity";

@Entity()
export class ListAttaqueEntity {
    @PrimaryGeneratedColumn()
    uuidList: number;

    @Column({ type: 'int' })
    Niveau: number;

    @ManyToOne(type => AttaqueEntity, attaque => attaque.uuid)
    @JoinColumn({ name: 'uuidAttaque', referencedColumnName: 'uuid' })
    attaque?: AttaqueEntity;
}