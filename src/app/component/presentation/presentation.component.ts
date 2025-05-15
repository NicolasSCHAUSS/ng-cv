import { Component } from '@angular/core';
import { Experience } from '../../model/experience';

@Component({
  selector: 'app-presentation',
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {

  protected title: string
  protected subtitle: string
  protected nationality: string
  protected language: string
  protected technology: Array<string> = []
  protected timeline: Array<Experience> = []

  constructor() {
    this.title = "Développeur full stack"
    this.subtitle = "10 ans d'expérience"
    this.nationality = "Français"
    this.language = "Anglais : Lu, écrit et parlé"
    this.technology.push(JSON.parse("/assets/technology.json").tools)
  }
}
