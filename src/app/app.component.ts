import { Component } from '@angular/core';

@Component({
  selector: 'sandra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dSize: number;
  dNum: number;
  roll: number[] = [];

  rollClicked() {
    // TODO
    this.roll = [];
  }
}
