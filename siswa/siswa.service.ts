import { Injectable } from '@nestjs/common';
import { Siswa } from './siswa.interface';
import { not } from 'rxjs/internal/util/not';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class SiswaService {
  private siswa: Siswa[] = [];

  create(data: Siswa) {
    this.siswa.push(data);
    return 'Data siswa berhasil ditambahkan';
  }

  findAll() {
    return this.siswa;
  }

  findOne(nisn: string) {
    const siswa = this.siswa.find((s) => s.nisn === nisn);
    if (!siswa) throw new  NotFoundException('Siswa tidak ditemukan');
    return siswa;
  }

  update(nisn: string, updateData: Partial<Siswa>) {
    const  index = this.siswa.findIndex((s)=> s.nisn === nisn);
    if (index === -1) throw new NotFoundException('Siswa tidak ditemukan');
    return `Siswa berhasil diupdate`;
  }

  remove(nisn: string) {
    const index = this.siswa.findIndex((s) => s.nisn === nisn);
    if (index === -1) throw new NotFoundException('Siswa tidak ditemukan');
    return `Siswa berhasil dihapus`;
  }
}
