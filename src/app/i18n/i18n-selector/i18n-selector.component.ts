import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'sandra-i18n-selector',
  templateUrl: './i18n-selector.component.html',
  styleUrls: ['./i18n-selector.component.scss']
})
export class I18nSelectorComponent {
  language = 'en';

  constructor(private i18n: TranslationService) {}

  onChangeLanguage(lang) {
    this.language = lang;
    this.i18n.use(lang);
  }
}
