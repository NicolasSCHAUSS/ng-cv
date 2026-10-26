import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TranslatePipe } from '../../pipe/translate.pipe';
import { TranslationService } from '../../service/translation.service';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule, CardModule, CurrencyPipe, TranslatePipe],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit {
  prices: any[] = [
    {
      icon: 'pi pi-clipboard',
      titleKey: 'price.pack_invoice.title',
      descriptionKeys: [
        'price.pack_invoice.description.0',
        'price.pack_invoice.description.1',
        'price.pack_invoice.description.2',
        'price.pack_invoice.description.3',
      ],
      price: 0,
    },
    {
      icon: 'pi pi-wrench',
      titleKey: 'price.pack_maintenance.title',
      descriptionKeys: [
        'price.pack_maintenance.description.0',
        'price.pack_maintenance.description.1',
        'price.pack_maintenance.description.2',
        'price.pack_maintenance.description.3',
      ],
      price: 35,
    },
    {
      icon: 'pi pi-code',
      titleKey: 'price.pack_development.title',
      descriptionKeys: [
        'price.pack_development.description.0',
        'price.pack_development.description.1',
        'price.pack_development.description.2',
        'price.pack_development.description.3',
      ],
      price: 47.5,
    },
    {
      icon: 'pi pi-user',
      titleKey: 'price.pack_consultant.title',
      descriptionKeys: [
        'price.pack_consultant.description.0',
        'price.pack_consultant.description.1',
        'price.pack_consultant.description.2',
        'price.pack_consultant.description.3',
      ],
      price: 60,
    },
    {
      icon: 'pi pi-calendar',
      titleKey: 'price.pack_project_management.title',
      descriptionKeys: [
        'price.pack_project_management.description.0',
        'price.pack_project_management.description.1',
        'price.pack_project_management.description.2',
        'price.pack_project_management.description.3',
      ],
      price: 68.9,
    },
    {
      icon: 'pi pi-refresh',
      titleKey: 'price.pack_agile_hybrid.title',
      descriptionKeys: [
        'price.pack_agile_hybrid.description.0',
        'price.pack_agile_hybrid.description.1',
        'price.pack_agile_hybrid.description.2',
        'price.pack_agile_hybrid.description.3',
      ],
      price: 47.9,
    },
  ];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {}
}
