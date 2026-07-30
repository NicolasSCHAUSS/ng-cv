import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule, AvatarModule, DividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SCHAUSS Nicolas';
  activeRoute: string = '/presentation';
  items: MenuItem[] = [
    {
      label: 'Présentation',
      icon: 'pi pi-user',
      routerLink: '/',
    },
    {
      label: 'Expériences',
      icon: 'pi pi-briefcase',
      routerLink: '/experience',
    },
    {
      label: 'Formations',
      icon: 'pi pi-graduation-cap',
      routerLink: '/formation',
    },
    {
      label: 'Contact',
      icon: 'pi pi-phone',
      routerLink: '/contact',
    },
    {
      label: 'Prix',
      icon: 'pi pi-tag',
      routerLink: '/price',
    },
  ];
}
