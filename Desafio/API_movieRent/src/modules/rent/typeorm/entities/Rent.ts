import { IRent } from "@modules/rent/domain/service-models/IRent";
import { Column,CreateDateColumn,Entity,PrimaryGeneratedColumn,UpdateDateColumn } from "typeorm";


@Entity
export class Rent implements IRent {
  @PrimaryGeneratedColumn()
  movie_id:string;

  @Column()
  rent_date:Date;

  @Column()
  return_date:Date;

  @Column()
  Is_available:boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;
  
}