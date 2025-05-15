import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule, AvatarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SCHAUSS Nicolas';
  activeRoute: string = '/presentation';
  items: MenuItem[] = [
    {
      label: 'Présentation',
      icon: 'pi pi-user',
      routerLink: '/'
    },
    {
      label: 'Expériences',
      icon: 'pi pi-briefcase',
      routerLink: '/experience'
    },
    {
      label: 'Formations',
      icon: 'pi pi-graduation-cap',
      routerLink: '/formation'
    },
    {
      label: 'Contact',
      icon: 'pi pi-phone',
      routerLink: '/contact'
    }
  ];
}
