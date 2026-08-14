import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        title: 'FIPAZ 2026 - 25 años de historia'
    },
    {
        path: 'nosotros',
        loadComponent: () => import('./components/nosotros-fipaz/nosotros-fipaz').then(m => m.NosotrosFipaz),
        title: 'Sobre Nosotros - FIPAZ'
    },
    { path: '**', redirectTo: 'home' }
];
