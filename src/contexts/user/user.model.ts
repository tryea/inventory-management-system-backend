import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { UserProfile } from "../userProfile/userProfile.model";
import { JobPosition } from "../jobPosition/jobPosition.model";

@Entity("Users")
export class User {
  @PrimaryGeneratedColumn()
  Id!: number;

  @Column({ unique: true })
  Email!: string;

  @Column()
  Password!: string;

  @Column({ nullable: true })
  VerificationCode?: string;

  @Column({ nullable: true })
  ForgetPasswordCode?: string;

  @OneToOne(() => UserProfile, (userProfile) => userProfile.User, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "UserId" })
  UserProfile!: UserProfile;

  @ManyToOne(() => JobPosition, (jobPosition) => jobPosition.Users)
  @JoinColumn({ name: "JobPositionId" })
  JobPosition!: JobPosition;
}
