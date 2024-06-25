import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CelularesService } from './celulares.service';
import { CreateCelulareDto } from './dto/create-celulare.dto';
import { UpdateCelulareDto } from './dto/update-celulare.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('celulares')
@Controller('celulares')
export class CelularesController {
  constructor(private readonly celularesService: CelularesService) {}

  @Post()
  create(@Body() createCelulareDto: CreateCelulareDto) {
    return this.celularesService.create(createCelulareDto);
  }

  @Get()
  findAll() {
    return this.celularesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.celularesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCelulareDto: UpdateCelulareDto) {
    return this.celularesService.update(+id, updateCelulareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.celularesService.remove(+id);
  }
}
