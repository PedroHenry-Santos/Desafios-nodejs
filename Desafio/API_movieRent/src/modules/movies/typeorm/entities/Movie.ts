import { Column,CreateDateColumn,Entity,PrimaryGeneratedColumn,UpdateDateColumn } from "typeorm";
import { IMovie } from "../../domain/service-models/IMovie";

@Entity()
export class Movie implements IMovie {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  
  @Column()
  name!: string;

  @Column()  
  release_date?:Date;
  
  @Column()  
  category!: string;

  @Column()
  value!: number;

  @Column()
  duration!: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;
}

 