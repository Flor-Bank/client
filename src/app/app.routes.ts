import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'become-client',
        title: 'Become Client',
        loadComponent: () =>
          import(
            './dashboard/pages/user/become-client/become-client.component'
          ),
      },
      {
        path: 'login',
        title: 'Login',
        loadComponent: () =>
          import('./dashboard/pages/user/login/login.component'),
      },
    ],
  },
];
