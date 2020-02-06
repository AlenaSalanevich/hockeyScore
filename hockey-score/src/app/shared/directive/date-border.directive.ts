import { Directive, HostBinding, Input } from '@angular/core';
import * as moment from 'moment';
import { Game } from '../model/game/game';

@Directive({
  selector: '[appDateBorder]'
})
export class DateBorderDirective {

  @HostBinding('style.border-color')
  private borderColor: string;

  @Input('byDate')
  public set byDate(game: Game) {
    this.borderColor = 'white';

    const currentMoment = moment();
    const dateMoment = moment(game.date);
    const differenceDays = currentMoment.diff(dateMoment, 'days');

    if (dateMoment.isBefore(currentMoment) && differenceDays < 14) {
      this.borderColor = 'green';
    }
    if (dateMoment.isAfter(currentMoment)) {
      this.borderColor = 'blue';
    }
  }

}
