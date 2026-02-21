import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/landing/landing.component').then(m => m.LandingComponent)
  },
  {
    path: 'myapps',
    loadComponent: () => import('./components/myapps/myapps.component').then(m => m.MyappsComponent)
  },
  {
    path: 'myapps/flap3',
    loadComponent: () => import('./components/myapps/flap3/flap3.component').then(m => m.Flap3Component)
  },
  {
    path: 'myapps/flap3/privacy-policy',
    loadComponent: () => import('./components/myapps/flap3/privacy-policy.component').then(m => m.Flap3PrivacyPolicyComponent)
  },
  {
    path: 'myapps/flap3/account-deletion',
    loadComponent: () => import('./components/myapps/flap3/account-deletion.component').then(m => m.Flap3AccountDeletionComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
