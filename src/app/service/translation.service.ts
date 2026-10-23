import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

export type Locale = 'fr' | 'en' | 'es' | 'it';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translations: { [key: string]: any } = {};
  private currentLocaleSubject = new BehaviorSubject<Locale>('fr');
  private readonly LOCALES: Locale[] = ['fr', 'en', 'es', 'it'];
  private readonly TRANSLATION_PATH = '/assets/i18n/';

  currentLocale$: Observable<Locale> = this.currentLocaleSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getLocale();
    this.loadTranslations();
  }

  private loadTranslations(): void {
    let loadedCount = 0;
    this.LOCALES.forEach((locale) => {
      this.http
        .get(`${this.TRANSLATION_PATH}${locale}.json`)
        .pipe(catchError(() => of({})))
        .subscribe((translations) => {
          this.translations[locale] = translations;
          loadedCount++;
          if (loadedCount === this.LOCALES.length) {
            this.currentLocaleSubject.next(this.currentLocaleSubject.value);
          }
        });
    });
  }

  setLocale(locale: Locale): void {
    if (this.LOCALES.includes(locale)) {
      this.currentLocaleSubject.next(locale);
    }
  }

  getLocale(): Locale {
    return this.currentLocaleSubject.value;
  }

  translate(
    key: string,
    params?: { [key: string]: string },
  ): Observable<string> {
    return this.currentLocale$.pipe(
      map((locale) => {
        let translation = this.getTranslation(locale, key);
        if (params) {
          Object.keys(params).forEach((paramKey) => {
            translation = translation.replace(
              `{{${paramKey}}}`,
              params[paramKey],
            );
          });
        }
        return translation || key;
      }),
    );
  }

  translateSync(key: string, params?: { [key: string]: string }): string {
    const locale = this.getLocale();
    let translation = this.getTranslation(locale, key);
    if (params) {
      Object.keys(params).forEach((paramKey) => {
        translation = translation.replace(`{{${paramKey}}}`, params[paramKey]);
      });
    }
    return translation || key;
  }

  private getTranslation(locale: Locale, key: string): string {
    const keys = key.split('.');
    let translation: any = this.translations[locale];

    for (const k of keys) {
      if (translation && translation.hasOwnProperty(k)) {
        translation = translation[k];
      } else {
        return key;
      }
    }

    return translation || key;
  }

  getAvailableLocales(): Locale[] {
    return this.LOCALES;
  }

  getLocaleDisplayName(locale: Locale): string {
    const displayNames: { [key in Locale]: string } = {
      fr: 'Français',
      en: 'English',
      es: 'Español',
      it: 'Italiano',
    };
    return displayNames[locale] || locale;
  }
}
