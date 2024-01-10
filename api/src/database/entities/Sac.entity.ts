import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity()
export class SacEntity {
    @PrimaryGeneratedColumn()
    uuid: number;
}