import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromSandra from './sandra/store/sandra.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'sandra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rollState: Observable<fromSandra.State>;

  constructor(private state: Store<fromSandra.AppState>) {}

  ngOnInit(): void {
    this.rollState = this.state.select('rolls');
  }
}
