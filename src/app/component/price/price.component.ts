import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule, CardModule, HttpClientModule, CurrencyPipe],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit {
  prices: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('/assets/prices.json').subscribe({
      next: (data) => {
        this.prices = data;
      },
      error: (err) => {
        console.error('Error loading prices', err);
      },
    });
  }
}
