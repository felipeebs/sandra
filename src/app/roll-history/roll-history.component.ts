import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromSandra from '../sandra/store/sandra.reducers';

@Component({
  selector: 'sandra-roll-history',
  templateUrl: './roll-history.component.html',
  styleUrls: ['./roll-history.component.scss']
})
export class RollHistoryComponent implements OnInit {
  rollState: Observable<fromSandra.State>;

  constructor(private state: Store<fromSandra.AppState>) {}

  ngOnInit() {
    this.rollState = this.state.select('rolls');
  }

}
