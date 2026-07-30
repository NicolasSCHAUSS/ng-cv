import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';
import { TranslationService } from './service/translation.service';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TranslatePipe } from './pipe/translate.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule, AvatarModule, DividerModule, FormsModule, SelectButtonModule, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'SCHAUSS Nicolas';
  activeRoute: string = '/';
  items: MenuItem[] = [];
  locales: any[] = [];
  selectedLocale: string = 'fr';

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentLocale$.subscribe(locale => {
      this.selectedLocale = locale;
      this.updateMenuItems();
    });
    
    this.locales = this.translationService.getAvailableLocales().map(locale => ({
      value: locale,
      label: this.translationService.getLocaleDisplayName(locale)
    }));
    
    this.updateMenuItems();
  }

  changeLanguage(locale: string): void {
    this.translationService.setLocale(locale as any);
  }

  private updateMenuItems(): void {
    this.items = [
      {
        label: this.translationService.translateSync('menu.presentation'),
        icon: 'pi pi-user',
        routerLink: '/',
      },
      {
        label: this.translationService.translateSync('menu.experience'),
        icon: 'pi pi-briefcase',
        routerLink: '/experience',
      },
      {
        label: this.translationService.translateSync('menu.formation'),
        icon: 'pi pi-graduation-cap',
        routerLink: '/formation',
      },
      {
        label: this.translationService.translateSync('menu.contact'),
        icon: 'pi pi-phone',
        routerLink: '/contact',
      },
      {
        label: this.translationService.translateSync('menu.price'),
        icon: 'pi pi-tag',
        routerLink: '/price',
      },
    ];
  }
}
