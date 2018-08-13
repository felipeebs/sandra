import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    RollCardComponent,
    FormCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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