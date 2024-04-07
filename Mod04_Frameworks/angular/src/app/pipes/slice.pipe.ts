import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice',
  standalone: true,
})
export class SlicePipe implements PipeTransform {
  transform(array: any[], start: number, end: number): any[] {
    return array.slice(start, end);
  }
}
