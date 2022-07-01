import { Rent } from "../../../../modules/rent/typeorm/entities/Rent";
import { Column,CreateDateColumn,Entity,JoinColumn,ManyToOne,PrimaryGeneratedColumn,UpdateDateColumn } from "typeorm";
import { IMovie } from "../../domain/service-models/IMovie";

@Entity()
export class Movie implements IMovie {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  
  @Column()
  name!: string;

  @Column()  
  release_date?:string;
  
  @Column()  
  category!: string;


  @Column()
  rent_id!: string;

  @Column()
  duration!: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;

  @ManyToOne(()=>Rent, (rent)=>rent.movie)
  @JoinColumn({name:'rent_id'})
  rent!: Rent;
}

 