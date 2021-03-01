import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'signup',
    canActivate: [AuthGuard],
    component: SignupComponent,
  },
  {
    path: 'forgot',
    canActivate: [AuthGuard],
    component: ForgotComponent,
  },
  {
    path: 'signin',
    canActivate: [AuthGuard],
    component: SigninComponent,
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
