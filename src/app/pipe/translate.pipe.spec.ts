import { TranslatePipe } from './translate.pipe';
import { TranslationService } from '../service/translation.service';

describe('TranslatePipe', () => {
  const mockTranslationService = {
    translateSync: (key: string, params?: { [key: string]: string }) => {
      const translations: { [key: string]: string } = {
        'test.key': 'Test Value',
        'test.withParam': 'Hello {{name}}'
      };
      const translation = translations[key] || key;
      if (params && translation) {
        return Object.keys(params).reduce((result, paramKey) => {
          return result.replace(`{{${paramKey}}}`, params[paramKey]);
        }, translation);
      }
      return translation;
    }
  };

  it('create an instance', () => {
    const pipe = new TranslatePipe(mockTranslationService as any);
    expect(pipe).toBeTruthy();
  });

  it('should translate key', () => {
    const pipe = new TranslatePipe(mockTranslationService as any);
    expect(pipe.transform('test.key')).toBe('Test Value');
  });

  it('should return key if not found', () => {
    const pipe = new TranslatePipe(mockTranslationService as any);
    expect(pipe.transform('unknown.key')).toBe('unknown.key');
  });

  it('should handle params', () => {
    const pipe = new TranslatePipe(mockTranslationService as any);
    expect(pipe.transform('test.withParam', { name: 'World' })).toBe('Hello World');
  });
});
