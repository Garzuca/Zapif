import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: 'nosotros',
        loadComponent: () => import('./components/nosotros-fipaz/nosotros-fipaz').then(m => m.NosotrosFipaz),
        title: 'Sobre Nosotros - FIPAZ'
    },
    { path: '**', redirectTo: '' }
];
