import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SpinnerManagerService {
  private initialState = 0;

  public get showSpinner(): boolean {
    return this.initialState > 0;
  }

  increaseStateCounter(): void {
    this.initialState++;
  }

  decreaseStateCounter(): void {
    this.initialState--;
  }
}
