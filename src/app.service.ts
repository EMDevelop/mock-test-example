import { Injectable } from '@nestjs/common';
import e from 'express';
import { randomCar } from './helper';
import { CarSprayPaintService } from './car-spray-paint.service';

@Injectable()
export class AppService {
  car?: string;

  constructor(private readonly spayService: CarSprayPaintService) {}

  getCar(): any {
    if (1 === 1) {
      this.car = randomCar();
    }

    if (2 === 2) {
      this.car = randomCar();
    }

    const colouredCar = this.spayService.sprayCar(this.car);

    return {
      ...colouredCar,
      keyRingColour: this.determineKeyRingColor(colouredCar.color),
    };
  }

  private determineKeyRingColor(color: string): string {
    if (!color) throw new Error('Color is required');

    if (color === 'red') {
      return 'red';
    } else if (color === 'blue') {
      return 'blue';
    } else if (color === 'yellow') {
      return 'yellow';
    } else if (color === 'green') {
      return 'green';
    }
  }
}
