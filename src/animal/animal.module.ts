import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import {Animal, AnimalSchema} from "./schemas/animal.schema";
import {MongooseModule} from "@nestjs/mongoose";
import {Continent, ContinentSchema} from "../continent/schemas/continent.schema";
import {Conservation_Status, Conservation_StatusSchema} from "../conservation-status/schemas/conservation-status.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Animal.name, schema: AnimalSchema }]),
    MongooseModule.forFeature([{ name: Continent.name, schema: ContinentSchema }]),
    MongooseModule.forFeature([{ name: Conservation_Status.name, schema: Conservation_StatusSchema }]),
  ],
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
