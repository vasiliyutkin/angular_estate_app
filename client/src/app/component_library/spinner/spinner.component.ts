import { Component } from '@angular/core';
import { SpinnerManagerService } from '../../services/spinner.manager.service';

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.scss'],
})
export class SpinnerComponent {
  constructor(private spinnerManager: SpinnerManagerService) {}

  public get showSpinner(): boolean {
    return this.spinnerManager.showSpinner;
  }
}
