import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: string): string {
    if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return 'error duration pattern';
    }

    const [yearStr, monthStr, dayStr] = value.split('-');
    const years = parseInt(yearStr, 10);
    const months = parseInt(monthStr, 10);
    const days = parseInt(dayStr, 10);

    const parts: string[] = [];

    if (years > 0) {
      parts.push(`${years} ${years > 1 ? 'ans' : 'an'}`);
    }
    if (months > 0) {
      parts.push(`${months} mois`);
    }
    if (days > 0) {
      parts.push(`${days} ${days > 1 ? 'jours' : 'jour'}`);
    }

    if (parts.length > 1) {
      //append comma between each value except the last one
      for (let i = 0; i <= parts.length - 1; i++) {
        if (parts.length == 2) {
          parts[i + 1] = ' et ' + parts[i + 1];
          break;
        }
        else if (i == parts.length - 1)
          parts[i] = ' et ' + parts[i];
        else
          parts[i] += ', ';
      }
    }

    return parts.join('');
  }

}
