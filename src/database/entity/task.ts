import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "tasks" })
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @Column()
  created_at!: string;
}
