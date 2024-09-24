import { Module } from '@nestjs/common';
import { ConservationStatusService } from './conservation-status.service';
import { ConservationStatusController } from './conservation-status.controller';

@Module({
  controllers: [ConservationStatusController],
  providers: [ConservationStatusService],
})
export class ConservationStatusModule {}
