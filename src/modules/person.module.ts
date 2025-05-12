import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from '../controllers/person.controller';
import { PersonModel } from '../models/person.model';

@Module({
  imports: [TypeOrmModule.forFeature([PersonModel])],
  controllers: [PersonController],
})
export class PersonModule {}

