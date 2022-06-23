export interface IMovie {
  name: string;
  id: string;
  release_date?:Date;
  value: number;
  duration: string;
  category: string;
  createdAt?: Date;
  updateAt?: Date;
}