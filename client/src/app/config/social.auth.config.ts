import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  VKLoginProvider,
} from 'angularx-social-login';

export const SOCIAL_AUTH_CONFIG = {
  provide: 'SocialAuthServiceConfig',
  useValue: {
    autoLogin: false,
    providers: [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(
          '676672408690-ivu0fh2q74e139bfh90u6qrtp8i50u28.apps.googleusercontent.com'
        ),
      },
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('926383761525270'),
      },
      {
        id: VKLoginProvider.PROVIDER_ID,
        provider: new VKLoginProvider('7786037'),
      },
    ],
  } as SocialAuthServiceConfig,
};
