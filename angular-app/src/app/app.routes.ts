import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'button',
    loadComponent: () => import('./demos/button/button-demo').then((m) => m.ButtonDemoComponent),
  },
  {
    path: 'tag',
    loadComponent: () => import('./demos/tag/tag-demo').then((m) => m.TagDemoComponent),
  },
  {
    path: 'select',
    loadComponent: () => import('./demos/select/select-demo').then((m) => m.SelectDemoComponent),
  },
  {
    path: 'select-variants',
    loadComponent: () =>
      import('./demos/select/select-variants').then((m) => m.SelectVariantsComponent),
  },
  { path: '', redirectTo: 'button', pathMatch: 'full' },
];
