export interface IRent {
  rent_id:string;
  client_id:string;
  rent_date:Date;
  return_date:Date;
  movies: string;
  Is_available:boolean;
  createdAt?: Date;
  updateAt?: Date;
}