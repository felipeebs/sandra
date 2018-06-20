import { Component } from '@angular/core';
import { RollResult } from './sandra';

@Component({
  selector: 'sandra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rollHistory: RollResult[] = [];
}
