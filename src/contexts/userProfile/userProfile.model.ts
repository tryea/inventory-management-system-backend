import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../user/user.model";

@Entity("UserProfiles")
export class UserProfile {
  @PrimaryGeneratedColumn()
  Id!: number;

  @Column()
  Fullname!: string;

  @Column()
  Gender!: string;

  @Column({ type: "date" })
  BirthOfDate!: string;

  @Column()
  BirthPlace!: string;

  @OneToOne(() => User, (user) => user.UserProfile)
  @JoinColumn({ name: "UserId" })
  User!: User;
}
