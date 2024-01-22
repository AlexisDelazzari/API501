import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '**',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },  {
    path: 'private-pokedex',
    loadComponent: () => import('./private-pokedex/private-pokedex.page').then( m => m.PrivatePokedexPage)
  },

];
