import { Component, Input } from '@angular/core';
import { SpinnerManagerService } from '../../services/spinner.manager.service';
import { SpinnerType } from './spinner.type.enum';

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
    return this.spinnerManager.showSpinner;
  }

  public get modern(): boolean {
    return this.spinnerType === SpinnerType.Modern;
  }

  public get bounce(): boolean {
    return this.spinnerType === SpinnerType.Bounce;
  }
}
