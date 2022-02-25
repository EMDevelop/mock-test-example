import { Injectable } from '@nestjs/common';

@Injectable()
export class CarSprayPaintService {
  sprayCar(car: string): { car: string; color: string } {
    return {
      car,
      color: this.determineColor(car),
    };
  }

  private determineColor(car: string): string {
    if (!car) throw new Error('Car is required');

    if (car === 'BMW') {
      return 'red';
    } else if (car === 'Audi') {
      return 'blue';
    } else if (car === 'Mercedes') {
      return 'yellow';
    } else if (car === 'Volkswagen') {
      return 'green';
    }
  }
}
