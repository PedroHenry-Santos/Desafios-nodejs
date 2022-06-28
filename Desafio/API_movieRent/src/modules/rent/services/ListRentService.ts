import { IRentRepository} from "../domain/repositorie-models/IRentRepository";

export default class ListRentService{
  constructor(private repository:IRentRepository){}
  
  public async execute(data?:string){
    const rent = await this.repository.findAll(data)

    return rent;
  }
}

