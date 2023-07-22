import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "../user/user.model";

@Entity("JobPositions")
export class JobPosition {
  @PrimaryGeneratedColumn()
  Id!: number;

  @Column()
  Name!: string;

  @OneToMany(() => User, (user) => user.JobPosition)
  Users!: User[];
}
