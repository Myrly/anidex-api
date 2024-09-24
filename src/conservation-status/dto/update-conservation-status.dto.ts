import { PartialType } from '@nestjs/mapped-types';
import { CreateConservationStatusDto } from './create-conservation-status.dto';

export class UpdateConservationStatusDto extends PartialType(CreateConservationStatusDto) {}
