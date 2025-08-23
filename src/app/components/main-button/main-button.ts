import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-main-button',
  imports: [],
  template: `
  <button
  class="cursor-pointer bg-amber-500 text-white w-full px-6 py-2 rounded-xl shadow-mt hover:opacity-90 "
  (click)="btnClicked.emit()">
    {{label()}}
  </button>
  `,

})
export class MainButton {
  label = input("");

  btnClicked = output();


}
