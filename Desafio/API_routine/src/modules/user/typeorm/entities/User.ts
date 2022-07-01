import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IUser } from "../../domain/service-models/IUser";

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column()
  name!: string

  @Column()
  age!: number
  
  @Column()
  gender!: string

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;
}