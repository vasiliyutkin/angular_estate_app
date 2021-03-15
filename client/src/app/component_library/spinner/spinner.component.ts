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
  constructor(private spinnerManager: SpinnerManagerService) {}

  @Input()
  spinnerType: SpinnerType = SpinnerType.Modern;

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
}
