import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Avatar } from 'primeng/avatar';
import { Divider } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { Menubar } from 'primeng/menubar';
import { TranslatePipe } from './pipe/translate.pipe';
import { TranslationService } from './service/translation.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    Menubar,
    Avatar,
    Divider,
    TranslatePipe,
    DropdownModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SCHAUSS Nicolas';
  items: MenuItem[] = [];
  languages: MenuItem[] = [];
  selectedLanguage: MenuItem = {
    label: 'Français',
    image: 'assets/flags/fr.png',
    locale: 'fr',
  };

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.currentLocale$.subscribe((locale) => {
      this.updateMenuItems();
      this.selectedLanguage = this.languages.find(
        (l) => l['locale'] === locale,
      ) || {
        label: 'Français',
        image: 'assets/flags/fr.png',
        locale: 'fr',
      };
    });
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

    this.languages = [
      {
        label: 'Français',
        image: 'assets/flags/fr.png',
        locale: 'fr',
      },
      {
        label: 'English',
        image: 'assets/flags/en.png',
        locale: 'en',
      },
      {
        label: 'Español',
        image: 'assets/flags/es.png',
        locale: 'es',
      },
      {
        label: 'Italiano',
        image: 'assets/flags/it.png',
        locale: 'it',
      },
    ];
  }
}
