import { Injectable } from '@nestjs/common';
import { CreateConservationStatusDto } from './dto/create-conservation-status.dto';
import { UpdateConservationStatusDto } from './dto/update-conservation-status.dto';

@Injectable()
export class ConservationStatusService {
  create(createConservationStatusDto: CreateConservationStatusDto) {
    return 'This action adds a new conservationStatus';
  }

  findAll() {
    return `This action returns all conservationStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conservationStatus`;
  }

  update(id: number, updateConservationStatusDto: UpdateConservationStatusDto) {
    return `This action updates a #${id} conservationStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} conservationStatus`;
  }
}
