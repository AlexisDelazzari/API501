import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {SacEntity} from "./Sac.entity";

@Entity()
export class DresseurEntity {
    @PrimaryGeneratedColumn()
    uuid: number;

    @Column({ type: 'int' })
    positionX: number;

    @Column({ type: 'int' })
    positionY: number;

    @Column({ type: 'varchar', length: 50 })
    orientation: string;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'text' })
    dialogue: string;

    @Column({ type: 'int' })
    rewardMoney: number;

    @Column({ type: 'boolean' })
    isHero: boolean;

    @ManyToOne(type => SacEntity, sac => sac.uuid)
    @JoinColumn({ name: 'uuidSac' , referencedColumnName: 'uuid'})
    sac: SacEntity;
}