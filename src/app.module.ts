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
      entities: [PersonModule],
      synchronize: true,
    }),
    PersonModule,
  ],
})
export class AppModule {}
