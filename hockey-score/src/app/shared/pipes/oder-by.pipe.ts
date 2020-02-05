import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oderBy'
})
export class OderByPipe implements PipeTransform {

  public transform<T>(sortable: T[], propertyAccessor: (val: T) => number): T[] {
    sortable.sort((left, right) => {
      return propertyAccessor(right) - propertyAccessor(left);
    });
    return sortable;
  }
}
