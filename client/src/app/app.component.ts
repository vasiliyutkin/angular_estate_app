import { Component } from '@angular/core';
import { SpinnerType } from './component_library/spinner/spinner.type.enum';

@Component({
  selector: 'app-estate',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  spinnerType: SpinnerType = SpinnerType.Bounce;
}
