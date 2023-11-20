
import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    priority: string;

    @Column()
    category: string;

    @Column()
    status: string;

    @DeleteDateColumn()
    deletedAt:Date
}