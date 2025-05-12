import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './modules/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 8080,
      username: 'root',
      password: '1234',
      database: 'cleito',
      entities: [UsuarioModule],
      synchronize: true,
    }),
    UsuarioModule,
  ],
})
export class AppModule {}
