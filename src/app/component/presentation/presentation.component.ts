import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Experience } from '../../model/experience';
import { HttpClient } from '@angular/common/http';

//Cloud word 
declare const TagCanvas: any;

@Component({
  selector: 'app-presentation',
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent implements AfterViewInit {

  protected title: string
  protected subtitle: string
  protected nationality: string
  protected language: string
  protected timeline: Array<Experience> = []

  constructor() {
    this.title = "Développeur full stack"
    this.subtitle = "10 ans d'expérience"
    this.nationality = "Français"
    this.language = "Anglais : Lu, écrit et parlé"
  }

  ngAfterViewInit(): void {
    try {
      TagCanvas.Start('myCanvas', 'tags', {
        textFont: null,
        textColour: "#a8a8a8",
        textHeight: 18,
        weight: true,
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        stretchY: 1,
        zoom: 1,
        wheelZoom: false,
        noSelect: false,
        outlineMethod: "colour",
        outlineColour: "#ffffff",
        clickToFront: 500,
        imageMode: "both",
        imagePosition: "bottom",
        imageScale: 0.08,
      })
    } catch (e) {
      console.error("TagCanvas init error", e)
    }
  }
}
