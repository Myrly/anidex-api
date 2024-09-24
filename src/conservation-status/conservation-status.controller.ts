import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConservationStatusService } from './conservation-status.service';
import { CreateConservationStatusDto } from './dto/create-conservation-status.dto';
import { UpdateConservationStatusDto } from './dto/update-conservation-status.dto';

@Controller('conservation-status')
export class ConservationStatusController {
  constructor(private readonly conservationStatusService: ConservationStatusService) {}

  @Post()
  create(@Body() createConservationStatusDto: CreateConservationStatusDto) {
    return this.conservationStatusService.create(createConservationStatusDto);
  }

  @Get()
  findAll() {
    return this.conservationStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conservationStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConservationStatusDto: UpdateConservationStatusDto) {
    return this.conservationStatusService.update(+id, updateConservationStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conservationStatusService.remove(+id);
  }
}
