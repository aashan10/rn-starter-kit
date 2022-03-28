export type UserType = Record<string, any>;

export type UserCredentials = {
  username: string;
  password: string;
};

export type AuthContextState = {
  token: string | false;
  user: UserType | false;
  login: (credentials: UserCredentials) => Promise<boolean>;
  logout: () => Promise<boolean>;
};
