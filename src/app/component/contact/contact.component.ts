import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'app-contact',
  imports: [Divider, MatTooltipModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  protected linkedin: string =
    'https://www.linkedin.com/in/nicolas-schauss-637bb2206/';
  protected discord: string = 'https://discord.com/users/ixionfire';
  protected facebook: string = 'https://www.facebook.com/ixionfire';
  protected email: string = 'nicolas.schauss@gmail.com';
  protected phone: string = '+33 6 63 22 01 86';
  protected localisation: string = 'Carcassonne, France';

  constructor() {}
}
