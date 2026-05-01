import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'about',
    renderMode: RenderMode.Client
  },
  {
    path: 'work',
    renderMode: RenderMode.Client
  },
  {
    path: 'pricing',
    renderMode: RenderMode.Client
  },
  {
    path: 'contact-us',
    renderMode: RenderMode.Client
  },
  {
    path: 'privacy-policy',
    renderMode: RenderMode.Client
  },
  {
    path: 'features',
    renderMode: RenderMode.Client
  },
  {
    path: 'community',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
