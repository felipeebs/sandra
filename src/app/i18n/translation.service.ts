import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  data: any = {};

  constructor(private http: HttpClient) {
  }

  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve) => {
      const langPath = `assets/i18n/${lang || 'en'}.json`;

      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          this.data = {};
          console.log(error);
          resolve(this.data);
        }
      );
    });
  }
}
