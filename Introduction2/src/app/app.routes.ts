import { Routes } from '@angular/router';
import { Home } from '../Pages/Home/Home';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: '**', redirectTo: '' },
];
