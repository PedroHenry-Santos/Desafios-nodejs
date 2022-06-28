import { IRentRepository} from "../domain/repositorie-models/IRentRepository";

export default class DeleteRentService{
  constructor(private repository:IRentRepository){}

  public async execute(id: string){
    const rent = await this.repository.findById(id);

    if (rent) await this.repository.remove(rent);
  }
}

