import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './modules/usuario.module';

@Module({
  imports: [UsuarioModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
