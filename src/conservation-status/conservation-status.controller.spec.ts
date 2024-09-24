import { Test, TestingModule } from '@nestjs/testing';
import { ConservationStatusController } from './conservation-status.controller';
import { ConservationStatusService } from './conservation-status.service';

describe('ConservationStatusController', () => {
  let controller: ConservationStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConservationStatusController],
      providers: [ConservationStatusService],
    }).compile();

    controller = module.get<ConservationStatusController>(ConservationStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
