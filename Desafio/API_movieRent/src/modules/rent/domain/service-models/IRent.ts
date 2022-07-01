export interface IRent {
  rent_id:string;
  client_id:string;
  rent_date:string;
  return_date:string;
  createdAt?: Date;
  updateAt?: Date;
}