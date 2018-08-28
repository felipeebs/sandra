import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
  MatButtonToggleModule,
} from '@angular/material';
import { FormCardComponent } from './form-card/form-card.component';
import { StoreModule } from '@ngrx/store';
import { sandraReducer } from './sandra/store/sandra.reducers';
import { RollHistoryComponent } from './roll-history/roll-history.component';
import { RollCardSimpleComponent } from './roll-card/roll-card-simple/roll-card-simple.component';
import { RollCardComplexComponent } from './roll-card/roll-card-complex/roll-card-complex.component';
import { TranslationService } from './i18n/translation.service';
import { TranslatePipe } from './i18n/translate.pipe';
import { I18nSelectorComponent } from './i18n/i18n-selector/i18n-selector.component';

export function setupTranslationFactory(
  service: TranslationService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    FormCardComponent,
    RollHistoryComponent,
    RollCardSimpleComponent,
    RollCardComplexComponent,
    TranslatePipe,
    I18nSelectorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    StoreModule.forRoot({rolls: sandraReducer})
  ],
  providers: [
    TranslationService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslationFactory,
      deps: [ TranslationService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
