import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pokedex',
        loadComponent: () =>
          import('../pokedex/pokedex.page').then((m) => m.PokedexPage),
      },
      {
        path: 'pokedex/:id',
        loadComponent: () => import('../pokedex/one-pokemon/one-pokemon.page').then( m => m.OnePokemonPage)
      },
      {
        path: 'connexion',
        loadComponent: () =>
          import('../connexion/connexion.page').then((m) => m.ConnexionPage),
      },
      {
        path: 'inscription',
        loadComponent: () =>
          import('../inscription/inscription.page').then((m) => m.InscriptionPage),
      },
      {
        path: 'accueil',
        loadComponent: () =>
          import('../accueil/accueil.page').then((m) => m.accueilPage),
      },

      {
        path: '',
        redirectTo: '/tabs/pokedex',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/pokedex',
    pathMatch: 'full',
  },
];
