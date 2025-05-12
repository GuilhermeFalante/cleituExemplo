import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './modules/usuario.module';
import { UsuarioModel } from './models/usuario.model'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 8080, 
      username: 'root',
      password: 'root',
      database: 'cleito',
      entities: [UsuarioModel], 
      synchronize: true, 
    }),
    UsuarioModule,
  ],
})
export class AppModule {}