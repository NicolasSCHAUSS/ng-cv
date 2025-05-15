import { Routes } from '@angular/router';
import { PresentationComponent } from './component/presentation/presentation.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { FormationComponent } from './component/formation/formation.component';
import { ContactComponent } from './component/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: PresentationComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'formation',
        component: FormationComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
