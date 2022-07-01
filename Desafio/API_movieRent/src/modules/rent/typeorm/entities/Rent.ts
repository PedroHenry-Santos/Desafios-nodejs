
import { Client } from "../../../../modules/clients/typeorm/entities/Client";
import { Movie } from "../../../../modules/movies/typeorm/entities/Movie";
import { IRent } from "../../../../modules/rent/domain/service-models/IRent";
import { Column,CreateDateColumn,Entity,JoinColumn,ManyToOne,OneToMany,PrimaryGeneratedColumn,UpdateDateColumn } from "typeorm";

@Entity()
export class Rent implements IRent {
  @PrimaryGeneratedColumn('uuid')
  rent_id:string;

  @Column()
  client_id: string;

  @Column()
  rent_date:string;

  @Column()
  return_date:string;


  
  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;

  @ManyToOne(()=>Client, (client) => client.rent)
  @JoinColumn({name:"client_id"})
  client?: Client;

  @OneToMany(()=>Movie, (movie)=>movie.rent)
  movie?:Movie[];
}