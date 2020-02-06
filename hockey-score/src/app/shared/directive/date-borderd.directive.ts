import { Directive, HostBinding, Input } from '@angular/core';
//import * as moment from 'moment';

@Directive({
  selector: '[appDateBorderd]'
})
export class DateBorderdDirective {

  @HostBinding('style.border-color')
  private borderColor: string;

  @Input('byDate')
  public set byDate(gameDate: Date) {
    this.borderColor = 'white';

    /* const currentMoment = moment();
    const courseMoment = moment(gameDate);
    const differenceDays = currentMoment.diff(courseMoment, 'days');

    if (courseMoment.isBefore(currentMoment) && differenceDays < 14) {
      this.borderColor = 'green';
    }
    if (courseMoment.isAfter(currentMoment)) {
      this.borderColor = 'blue';
    } */
  }

}
