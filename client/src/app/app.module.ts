import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatBadgeModule } from '@angular/material/badge';

import { NgxMaskModule } from 'ngx-mask';

import { SocialLoginModule } from 'angularx-social-login';
import { SOCIAL_AUTH_CONFIG } from './config/social.auth.config';

import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { NetworkingInterceptor } from './interceptors/networking.interceptor';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { ExceptionsInterceptor } from './interceptors/exceptions.interceptor';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NavigationComponent } from './component_library/navigation/navigation.component';
import { SpinnerComponent } from './component_library/spinner/spinner.component';

import { SpinnerManagerService } from './services/spinner.manager.service';
import { AuthenticationService } from './services/authentication.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslationInterceptor } from './interceptors/translation.interceptor';
import { TranslationService } from './services/translation.service';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ConfirmRegistrationComponent } from './confirm_registration/confirm.registration.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ChatComponent } from './component_library/chat/chat.component';
import { ChatDialogComponent } from './component_library/chat/chat-dialog';
import { ScrollTopComponent } from './component_library/scroll-top/scroll-top.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    DashboardComponent,
    MainComponent,
    SigninComponent,
    SignupComponent,
    ForgotComponent,
    AboutComponent,
    NavigationComponent,
    BackofficeComponent,
    ApartmentsComponent,
    ConfirmRegistrationComponent,
    ChatComponent,
    ChatDialogComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      maxOpened: 1,
      preventDuplicates: true,
      positionClass: 'toast-bottom-center',
      closeButton: false,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgxMaskModule.forRoot(),
    NgxIntlTelInputModule,
    MatIconModule,
    MatBadgeModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SocialLoginModule,
  ],
  providers: [
    MatDatepickerModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TranslationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExceptionsInterceptor,
      multi: true,
    },
    SpinnerManagerService,
    AuthenticationService,
    TranslationService,
    SOCIAL_AUTH_CONFIG,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private translationServise: TranslationService) {
    this.translationServise.initializeLang();
  }
}
