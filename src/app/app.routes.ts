import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: 'calculadora', loadComponent: () => import('./componets/calculadora/calculadora').then(m => m.Calculadora)},
];
