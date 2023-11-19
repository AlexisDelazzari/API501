import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {DresseurEntity} from "./Dresseur.entity";

@Entity()
export class HeroEntity {
    @PrimaryGeneratedColumn()
    uuid: number;

    @Column({ type: 'int' })
    money: number;

    @Column({ type: 'int' })
    age: number;

    @Column({ type: 'varchar', length: 255 })
    password: string;

    @Column({ type: 'varchar', length: 255 })
    idConnexion: string;

    @Column({ type: 'int' })
    sexe: number;

    @Column({ type: 'int' })
    hourPlay: number;

    @ManyToOne(() => DresseurEntity, dresseur => dresseur.uuid)
    @JoinColumn({ name: 'uuidDresseur' , referencedColumnName: 'uuid'})
    dresseur: DresseurEntity;
}