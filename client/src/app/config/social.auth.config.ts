import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from 'angularx-social-login';

const autoLogin = false;

const providers: any = [
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      '676672408690-ivu0fh2q74e139bfh90u6qrtp8i50u28.apps.googleusercontent.com'
    ),
  },
];

export const SOCIAL_AUTH_CONFIG = {
  provide: 'SocialAuthServiceConfig',
  useValue: {
    autoLogin,
    providers,
  } as SocialAuthServiceConfig,
};
