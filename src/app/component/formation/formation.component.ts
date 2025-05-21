import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Formation } from '../../model/formation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formation',
  imports: [TimelineModule, CardModule, ButtonModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
  protected formations: Array<Formation> = [];

  constructor(private http: HttpClient) {
    this.http.get<Array<Formation>>('/assets/formations.json').subscribe((data) => {
      this.formations = data;
    });
  }
}
