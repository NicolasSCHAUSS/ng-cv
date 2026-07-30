import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../service/translation.service';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(value: string): string {
    if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return this.translationService.translateSync('experience.error');
    }

    const [yearStr, monthStr, dayStr] = value.split('-');
    const years = parseInt(yearStr, 10);
    const months = parseInt(monthStr, 10);
    const days = parseInt(dayStr, 10);

    const parts: string[] = [];

    if (years > 0) {
      const yearKey = years > 1 ? 'experience.duration.years' : 'experience.duration.year';
      parts.push(`${years} ${this.translationService.translateSync(yearKey)}`);
    }
    if (months > 0) {
      const monthKey = months > 1 ? 'experience.duration.months' : 'experience.duration.month';
      parts.push(`${months} ${this.translationService.translateSync(monthKey)}`);
    }
    if (days > 0) {
      const dayKey = days > 1 ? 'experience.duration.days' : 'experience.duration.day';
      parts.push(`${days} ${this.translationService.translateSync(dayKey)}`);
    }

    if (parts.length > 1) {
      //append comma between each value except the last one
      for (let i = 0; i <= parts.length - 1; i++) {
        if (parts.length == 2) {
          parts[i + 1] = this.translationService.translateSync('experience.duration.and') + parts[i + 1];
          break;
        }
        else if (i == parts.length - 1)
          parts[i] = this.translationService.translateSync('experience.duration.and') + parts[i];
        else
          parts[i] += this.translationService.translateSync('experience.duration.comma');
      }
    }

    return parts.join('');
  }

}
