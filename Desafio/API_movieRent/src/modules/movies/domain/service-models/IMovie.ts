export interface IMovie {
  name: string;
  id: string;
  release_date?:string;
  duration: string;
  category: string;
  rent_id: string;
  createdAt?: Date;
  updateAt?: Date;
}