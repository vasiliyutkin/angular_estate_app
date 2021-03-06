import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ConfirmRegistrationComponent } from './confirm_registration/confirm.registration.component';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  {
    path: 'signup',
    canActivate: [AuthGuard],
    component: SignupComponent,
  },
  {
    path: 'forgot/:userId',
    canActivate: [AuthGuard],
    component: ForgotComponent,
    resolve: {
      user: UserResolver,
    },
  },
  {
    path: 'signin',
    canActivate: [AuthGuard],
    component: SigninComponent,
  },
  {
    path: 'registration-successful',
    canActivate: [AuthGuard],
    component: ConfirmRegistrationComponent,
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
  {
    path: 'backoffice',
    component: BackofficeComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'apartments',
        component: ApartmentsComponent,
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
