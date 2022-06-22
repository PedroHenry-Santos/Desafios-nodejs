import { Column,CreateDateColumn,Entity,PrimaryGeneratedColumn,UpdateDateColumn } from "typeorm";
import { IClient } from "../../domain/service-models/IClient";

@Entity()
export class Client implements IClient {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  
  @Column()
  name!: string;

  @Column()
  cpf!: string;

  @Column()
  tel!: string;

  @Column()
  adress!: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;
}