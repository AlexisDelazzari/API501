import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity()
export class CritiqueEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
    probabilité: number;

    @Column({ type: 'varchar', length: 200, nullable: true })
    description: string;
}