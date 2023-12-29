import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConfig } from './db/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessModule } from './modules/business/business.module';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), BusinessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
