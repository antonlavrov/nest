import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

// TODO: create custom pipe
@Injectable()
export class ParseStatePipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}
