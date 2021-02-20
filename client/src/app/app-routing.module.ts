import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth';
import { AuthGuard } from './helpers';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  { path: '**', redirectTo: '' },

  /* {
    path: '',
    component: LoginComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'main',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'subscriptions',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'account',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  , */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
