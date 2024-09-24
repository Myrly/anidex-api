import {Injectable} from '@nestjs/common';
import {CreateAnimalDto} from './dto/create-animal.dto';
import {UpdateAnimalDto} from './dto/update-animal.dto';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Animal} from "./schemas/animal.schema";
import {Continent} from "../continent/schemas/continent.schema";
import {Conservation_Status} from "../conservation-status/schemas/conservation-status.schema";

@Injectable()
export class AnimalService {

  constructor(
    @InjectModel(Animal.name) private animalModel: Model<Animal>,
    @InjectModel(Continent.name) private continentModel: Model<Continent>,
    @InjectModel(Conservation_Status.name) private conservationStatusModel: Model<Conservation_Status>,
  ) {}

  create(createAnimalDto: CreateAnimalDto) {
    return 'This action adds a new animal';
  }

  async findAll() {
    const animals = await this.animalModel.find().exec();
    return await Promise.all(animals.map(async (animal) => {
      const continents = await this.continentModel.find({id: {$in: animal.continents}}).exec();
      const conservationStatus = await this.conservationStatusModel.findOne({id: animal.conservationStatus}).exec();
      return {
        ...animal.toObject(),
        continents,
        conservationStatus
      };
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} animal`;
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return `This action removes a #${id} animal`;
  }
}
