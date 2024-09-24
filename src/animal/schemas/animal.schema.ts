import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AnimalDocument = HydratedDocument<Animal>;

@Schema()
export class Animal {

  @Prop({ index: true, required: true, auto: true, unique: true })
  id: number;

  @Prop({ required: true, unique: true })
  species: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true, type: [Number] })
  continents: number[];

  @Prop({ required: true })
  averageLifespan: number;

  @Prop({ required: true })
  averageWeight: number;

  @Prop({ required: true })
  averageHeight: number;

  @Prop({ required: true, type: Number })
  conservationStatus: number;

  @Prop({ required: true })
  domesticated: boolean;

}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
