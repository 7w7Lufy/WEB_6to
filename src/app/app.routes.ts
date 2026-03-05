import { Routes } from '@angular/router';
import { Directivas } from '../pages/directivas/directivas';
import { FrameworksComponent } from '../pages/Frameworks/Framework';

export const routes: Routes = [
    {
        path: 'directivas',
        component: Directivas
    },
    {
        path: 'frameworks',
        component: FrameworksComponent
    },
    {
        path: '**',
        redirectTo: 'directivas',
        pathMatch: 'full'
    }
];
