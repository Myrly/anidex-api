import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ContinentDocument = HydratedDocument<Continent>;

@Schema()
export class Continent {

  @Prop({ index: true, required: true, auto: true, unique: true })
  id: number;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  color: string;

}

export const ContinentSchema = SchemaFactory.createForClass(Continent);
