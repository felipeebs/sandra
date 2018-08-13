import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatSlideToggleModule,
} from '@angular/material';
import { RollCardComponent } from './roll-card/roll-card.component';
import { FormCardComponent } from './form-card/form-card.component';
import { StoreModule } from '@ngrx/store';
import { sandraReducer } from './sandra/store/sandra.reducers';
import { RollHistoryComponent } from './roll-history/roll-history.component';

@NgModule({
  declarations: [
    AppComponent,
    RollCardComponent,
    FormCardComponent,
    RollHistoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    StoreModule.forRoot({rolls: sandraReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
