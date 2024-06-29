import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentModule } from './content/content.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ContentModule],
})
export class AppModule {}
