export interface IRent {
  movie_id:string;
  rent_date:Date;
  return_date:Date;
  Is_available:boolean;
  createdAt?: Date;
  updateAt?: Date;
}