import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioModel } from 'src/models/usuario.model';
import { UsuarioSchema } from 'src/schemas/usuario.schema';

@Controller('/usuario')
export class UsuarioController {
  constructor(
    @InjectRepository(UsuarioModel) private model: Repository<UsuarioModel>,
  ) {}

  @Post()
  public async create(@Body() body: UsuarioSchema): Promise<UsuarioModel> {
    return this.model.save(body);
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UsuarioModel> {
    const usuario = await this.model.findOne({ where: { id } });

    if (!usuario) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    return usuario;
  }

  @Get()
  public async getAll(): Promise<UsuarioModel[]> {
    return this.model.find();
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UsuarioSchema,
  ): Promise<UsuarioModel> {
    const usuario = await this.model.findOne({ where: { id } });

    if (!usuario) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    await this.model.update({ id }, body);

    return this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const usuario = await this.model.findOne({ where: { id } });

    if (!usuario) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    await this.model.delete(id);

    return `A pessoa com id ${id} foi deletada com sucesso`;
  }
}
