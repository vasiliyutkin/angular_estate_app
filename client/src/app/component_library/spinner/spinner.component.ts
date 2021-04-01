import { Component, Input } from '@angular/core';
import { SpinnerManagerService } from '../../services/spinner.manager.service';
import { SpinnerType } from './spinner.type.enum';
import * as $ from 'jquery';

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.scss'],
})
export class SpinnerComponent {
  spinnerType: SpinnerType = SpinnerType.Modern;
  spinners: SpinnerType[] = [
    SpinnerType.Modern,
    SpinnerType.Bounce,
    SpinnerType.Pacman,
    SpinnerType.Domino,
  ];

  constructor(private spinnerManager: SpinnerManagerService) {
    setInterval(() => {
      this.spinnerType = this.spinners[getRandInterval(0, 3)];
    }, 5000);
  }

  public get showSpinner(): boolean {
    this.spinnerManager.showSpinner
      ? $('body').addClass('no-overflow')
      : $('body').removeClass('no-overflow');
    return this.spinnerManager.showSpinner;
  }

  public get modern(): boolean {
    return this.spinnerType === SpinnerType.Modern;
  }

  public get bounce(): boolean {
    return this.spinnerType === SpinnerType.Bounce;
  }

  public get pacman(): boolean {
    return this.spinnerType === SpinnerType.Pacman;
  }

  public get domino(): boolean {
    return this.spinnerType === SpinnerType.Domino;
  }
}

function getRandInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
