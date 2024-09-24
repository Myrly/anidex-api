import {ConservationStatusEntity} from "../../conservation-status/entities/conservation-status.entity";
import {ContinentEntity} from "../../continent/entities/continent.entity";

export class AnimalEntity {
  constructor(
    public id: number,
    public species: string,
    public imageUrl: string,
    public continents: ContinentEntity[],
    public averageLifespan: number,
    public averageWeight: number,
    public averageHeight: number,
    public conservationStatus: ConservationStatusEntity,
    public domesticated: boolean,
  ) {
  }
}
