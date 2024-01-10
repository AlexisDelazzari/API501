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

    //default value 0
    @Column({ type: 'int', default: 0 })
    money: number;

    @Column({ type: 'int' })
    age: number;

    @Column({ type: 'varchar', length: 255 })
    password: string;

    @Column({ type: 'varchar', length: 255 })
    idConnexion: string;

    @Column({ type: 'int' })
    sexe: number;

    @Column({ type: 'int' , default: 0})
    hourPlay: number;

    @ManyToOne(() => DresseurEntity, dresseur => dresseur.uuid)
    @JoinColumn({ name: 'uuidDresseur' , referencedColumnName: 'uuid'})
    dresseur: DresseurEntity;
}