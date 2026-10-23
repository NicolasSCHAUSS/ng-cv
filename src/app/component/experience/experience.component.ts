import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { Divider } from 'primeng/divider';
import { Experience } from '../../model/experience';
import { DurationPipe } from '../../pipe/duration.pipe';
import { TranslatePipe } from '../../pipe/translate.pipe';
import { TranslationService } from '../../service/translation.service';

@Component({
  selector: 'app-experience',
  imports: [AccordionModule, DurationPipe, Divider, TranslatePipe],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  protected experiences: Array<Experience> = [];

  constructor(
    private http: HttpClient,
    private translationService: TranslationService,
  ) {
    this.loadExperiences();
    this.translationService.currentLocale$.subscribe(() => {
      this.loadExperiences();
    });
  }

  private loadExperiences(): void {
    const locale = this.translationService.getLocale();
    const fileName =
      locale === 'fr' ? 'experiences.json' : `experiences-${locale}.json`;
    this.http
      .get<Array<Experience>>(`/assets/${fileName}`)
      .subscribe((data) => {
        this.experiences = data;
      });
  }
}
