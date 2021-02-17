import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { AuthGuard } from './helpers';

const routes: Routes = [
  {
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
        path: 'bankingAdmin',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'dashboard',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'files',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'files/:state/:id',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'folders',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'folders/:id',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },

      {
        path: 'mtl-info/:id',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'subscriptions',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'api',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'account',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'help',
        component: LoginComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
