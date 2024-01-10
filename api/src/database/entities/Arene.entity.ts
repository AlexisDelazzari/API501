import {
    Entity,
    PrimaryGeneratedColumn,
    Column, ManyToOne, JoinColumn
} from "typeorm";
import {ListDresseurEntity} from "./ListDresseur.entity";
import {ListRewardEntity} from "./ListReward.entity";

@Entity()
export class AreneEntity {
    @PrimaryGeneratedColumn()
    uuid: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @ManyToOne(() => ListDresseurEntity, (listDresseur) => listDresseur.uuidList, {})
    @JoinColumn({ name: 'uuidListDresseur', referencedColumnName: 'uuidList' })
    listDresseur?: ListDresseurEntity;

    @ManyToOne(() => ListDresseurEntity, (listDresseur) => listDresseur.uuidList, {})
    @JoinColumn({ name: 'uuidChampion', referencedColumnName: 'uuidList' })
    champion?: ListDresseurEntity;

    @ManyToOne(() => ListRewardEntity, (listReward) => listReward.uuidList, {})
    @JoinColumn({ name: 'uuidListReward', referencedColumnName: 'uuidList' })
    listReward?: ListRewardEntity;
}
