import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CarSprayPaintService } from './car-spray-paint.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getCar();
  }
}
