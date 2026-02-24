import { Routes } from '@angular/router';
import { Directivas } from '../pages/directivas/directivas';
import { MetodosArrays } from '../pages/metodos-arrays/metodos-arrays';

export const routes: Routes = [
    {
        path: 'directivas',
        component: Directivas
    },
    {
        path: 'metodos-arrays',
        component: MetodosArrays
    },
    {
        path: '**',
        redirectTo: 'directivas',
        pathMatch: 'full'
    }
];
