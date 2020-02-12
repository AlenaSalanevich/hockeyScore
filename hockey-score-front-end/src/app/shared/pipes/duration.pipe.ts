import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duaration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    let result: string;
    if (value === null || value === 0) {
      result = "";
    }
    else {
      let min: number = value % 60;
      let hours: number = Math.round(value / 60);

      if (min === 0) {
        result = hours + " h " + "00 min";
      }
      else {
        result = hours + " h " + min + " min";
      }

    }
    return result;
  }
}
