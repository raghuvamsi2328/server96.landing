import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing/landing-page.component';

export const routes: Routes = [
	{
		path: '',
		component: LandingPageComponent
	},
	{
		path: 'about',
		loadComponent: () => import('./pages/client-page/client-page.component').then((m) => m.ClientPageComponent),
		data: { key: 'about' }
	},
	{
		path: 'work',
		loadComponent: () => import('./pages/client-page/client-page.component').then((m) => m.ClientPageComponent),
		data: { key: 'work' }
	},
	{
		path: 'pricing',
		loadComponent: () => import('./pages/client-page/client-page.component').then((m) => m.ClientPageComponent),
		data: { key: 'pricing' }
	},
	{
		path: 'contact-us',
		loadComponent: () => import('./pages/client-page/client-page.component').then((m) => m.ClientPageComponent),
		data: { key: 'contact-us' }
	},
	{
		path: 'privacy-policy',
		loadComponent: () => import('./pages/client-page/client-page.component').then((m) => m.ClientPageComponent),
		data: { key: 'privacy-policy' }
	},
	{
		path: 'features',
		loadComponent: () => import('./pages/client-page/client-page.component').then((m) => m.ClientPageComponent),
		data: { key: 'features' }
	},
	{
		path: 'community',
		loadComponent: () => import('./pages/client-page/client-page.component').then((m) => m.ClientPageComponent),
		data: { key: 'community' }
	}
];
