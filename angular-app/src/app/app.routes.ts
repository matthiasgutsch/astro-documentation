import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'v21',
    children: [
      {
        path: 'button',
        loadComponent: () =>
          import('./demos/button/button-demo').then((m) => m.ButtonDemoComponent),
      },
      {
        path: 'tag',
        loadComponent: () => import('./demos/tag/tag-demo').then((m) => m.TagDemoComponent),
      },
      {
        path: 'select',
        loadComponent: () =>
          import('./demos/select/select-demo').then((m) => m.SelectDemoComponent),
      },
      {
        path: 'select-variants',
        loadComponent: () =>
          import('./demos/select/select-variants').then((m) => m.SelectVariantsComponent),
      },
      {
        path: 'button-preview',
        loadComponent: () =>
          import('./demos/button/button-preview').then((m) => m.ButtonPreviewComponent),
      },
      {
        path: 'tag-preview',
        loadComponent: () => import('./demos/tag/tag-preview').then((m) => m.TagPreviewComponent),
      },
      {
        path: 'select-preview',
        loadComponent: () =>
          import('./demos/select/select-preview').then((m) => m.SelectPreviewComponent),
      },
    ],
  },
  {
    path: 'v20',
    children: [
      {
        path: 'button',
        loadComponent: () =>
          import('./demos/button/button-demo').then((m) => m.ButtonDemoComponent),
      },
      {
        path: 'tag',
        loadComponent: () => import('./demos/tag/tag-demo').then((m) => m.TagDemoComponent),
      },
      {
        path: 'select',
        loadComponent: () =>
          import('./demos/select/select-demo').then((m) => m.SelectDemoComponent),
      },
      {
        path: 'button-preview',
        loadComponent: () =>
          import('./demos/button/button-preview').then((m) => m.ButtonPreviewComponent),
      },
      {
        path: 'tag-preview',
        loadComponent: () => import('./demos/tag/tag-preview').then((m) => m.TagPreviewComponent),
      },
      {
        path: 'select-preview',
        loadComponent: () =>
          import('./demos/select/select-preview').then((m) => m.SelectPreviewComponent),
      },
    ],
  },
  // Add future versions here:
  // { path: 'v22', children: [ ... ] },
  { path: '', redirectTo: 'v21/button', pathMatch: 'full' },
];
