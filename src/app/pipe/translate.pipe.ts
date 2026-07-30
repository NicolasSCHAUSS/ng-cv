import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../service/translation.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(key: string, params?: { [key: string]: string }): string {
    return this.translationService.translateSync(key, params);
  }
}
