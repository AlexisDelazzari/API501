import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {IsAuthGuard} from "../guard/is-auth.guard";
import {UserService} from "../services/user.service";
import {UpdateTokenService} from "../guard/update-token.service";
export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'download',
        loadComponent: () => import('../download/download.page').then( m => m.DownloadPage),
        canActivate: [IsAuthGuard]
      },
      {
        path: 'pokedex',
        loadComponent: () => import('../pokedex/pokedex.page').then((m) => m.PokedexPage),
        canActivate: [UpdateTokenService]
      },
      {
        path: 'private-pokedex',
        loadComponent: () => import('../private-pokedex/private-pokedex.page').then((m) => m.PrivatePokedexPage),
        canActivate: [UpdateTokenService]
      },
      {
        path: 'pokedex/:id',
        loadComponent: () => import('../pokedex/one-pokemon/one-pokemon.page').then( m => m.OnePokemonPage),
        canActivate: [UpdateTokenService]
      },
      {
        path: 'connexion',
        loadComponent: () => import('../connexion/connexion.page').then((m) => m.ConnexionPage),
        canActivate: [UpdateTokenService]

      },
      {
        path: 'inscription',
        loadComponent: () => import('../inscription/inscription.page').then((m) => m.InscriptionPage),
        canActivate: [UpdateTokenService]
      },
      {
        path: 'accueil',
        loadComponent: () =>
          import('../accueil/accueil.page').then((m) => m.accueilPage),
        canActivate: [UpdateTokenService]

      },


      {
        path: '',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full',
      },

      {
        path: '**',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/accueil',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/tabs/accueil',
    pathMatch: 'full',
  },
];
