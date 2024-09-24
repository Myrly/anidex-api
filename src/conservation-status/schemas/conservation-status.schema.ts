import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type Conservation_StatusDocument = HydratedDocument<Conservation_Status>;

@Schema()
export class Conservation_Status {

  @Prop({ index: true, required: true, auto: true, unique: true })
  id: number;

  @Prop({ required: true, unique: true })
  name: string;

}

export const Conservation_StatusSchema= SchemaFactory.createForClass(Conservation_Status);
