import {Controller,Get,Post,Body,Patch,Param,Delete,
} from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { Siswa } from './siswa.interface'


@Controller('Siswa')
export class SiswaController {
  constructor(private readonly siswaService: SiswaService) {}

  @Post()
  create(@Body() data: Siswa) {
    return this.siswaService.create(data);
  }

  @Get()
  findAll() {
    return this.siswaService.findAll();
  }

  @Get(':nisn')
  findOne(@Param('nisn') nisn: string) {
    return this.siswaService.findOne(nisn);
  }

  @Patch(':nisn')
  update(@Param('nisn') nisn: string, @Body() updateData: Partial<Siswa>) {
    return this.siswaService.update(nisn, updateData);
  }
  @Delete(':nisn')
  remove(@Param('nisn') nisn: string) {
    return this.siswaService.remove(nisn);
  }
}
