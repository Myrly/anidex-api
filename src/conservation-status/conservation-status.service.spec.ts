import { Test, TestingModule } from '@nestjs/testing';
import { ConservationStatusService } from './conservation-status.service';

describe('ConservationStatusService', () => {
  let service: ConservationStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConservationStatusService],
    }).compile();

    service = module.get<ConservationStatusService>(ConservationStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
