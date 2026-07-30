import { DurationPipe } from './duration.pipe';
import { TranslationService } from '../service/translation.service';

describe('DurationPipe', () => {
  const mockTranslationService = {
    translateSync: (key: string) => {
      const translations: any = {
        'experience.duration.year': 'year',
        'experience.duration.years': 'years',
        'experience.duration.month': 'month',
        'experience.duration.months': 'months',
        'experience.duration.day': 'day',
        'experience.duration.days': 'days',
        'experience.duration.and': ' and ',
        'experience.duration.comma': ', ',
        'experience.error': 'error duration pattern'
      };
      return translations[key] || key;
    }
  };

  it('create an instance', () => {
    const pipe = new DurationPipe(mockTranslationService as any);
    expect(pipe).toBeTruthy();
  });

  it('should transform valid duration', () => {
    const pipe = new DurationPipe(mockTranslationService as any);
    expect(pipe.transform('0001-03-00')).toBe('1 year 3 months');
  });

  it('should return error for invalid duration', () => {
    const pipe = new DurationPipe(mockTranslationService as any);
    expect(pipe.transform('invalid')).toBe('error duration pattern');
  });
});
