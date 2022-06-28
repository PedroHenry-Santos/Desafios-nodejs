export interface IRent{
  id: number,
  id_client: number,
  id_movies: number,
  lending_date: Date,
  return_date: Date
  is_rented: boolean
}