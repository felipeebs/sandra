import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
// import {
//   MatButtonModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatCardModule,
//   MatSlideToggleModule,
// } from '@angular/material';
import { FormCardComponent } from './form-card/form-card.component';
import { StoreModule } from '@ngrx/store';
import { sandraReducer } from './sandra/store/sandra.reducers';
import { RollHistoryComponent } from './roll-history/roll-history.component';
import { RollCardSimpleComponent } from './roll-card/roll-card-simple/roll-card-simple.component';
import { RollCardComplexComponent } from './roll-card/roll-card-complex/roll-card-complex.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCardComponent,
    RollHistoryComponent,
    RollCardSimpleComponent,
    RollCardComplexComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule,
    // MatSlideToggleModule,
    StoreModule.forRoot({rolls: sandraReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
