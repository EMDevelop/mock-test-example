import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarSprayPaintService } from './car-spray-paint.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CarSprayPaintService],
})
export class AppModule {}
