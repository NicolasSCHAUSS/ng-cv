import { Component } from '@angular/core';
import { Experience } from '../../model/experience';
import { HttpClient } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { DurationPipe } from '../../pipe/duration.pipe';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'app-experience',
  imports: [AccordionModule, DurationPipe, Divider],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  protected experiences: Array<Experience> = [];

  constructor(private http: HttpClient) {
    this.http.get<Array<Experience>>('/assets/experiences.json').subscribe((data) => {
      this.experiences = data;
    });
  }
}
