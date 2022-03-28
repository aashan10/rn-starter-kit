import {ReactElement} from 'react';

export type RootNavigationParams = {
  children: ReactElement | null | Array<ReactElement>;
};

export type AuthNavigatorScreenList = {
  login: {
    username?: string;
  };
  register: {};
  'forgot-password': {
    email?: string;
  };
  'change-password': {};
};
