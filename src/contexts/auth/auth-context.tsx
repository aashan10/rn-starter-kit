import React, {createContext, useEffect, useState} from 'react';
import {AcceptsChildren, AuthContextState, UserType} from '@app/types';
import {getAuthToken} from '@app/storage';

export const AuthContext = createContext<AuthContextState>({
  user: false,
  login: async () => false,
  logout: async () => false,
  token: false,
});

export const AuthProvider = ({children}: AcceptsChildren) => {
  const [user, setUser] = useState<UserType | false>(false);
  const [token, setToken] = useState<string | false>(false);

  useEffect(() => {
    getAuthToken().then(authToken => {
      setToken(authToken);
    });
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login: async ({username, password}): Promise<boolean> => {
          /**
           *  For persisting the user session, you'll need to somehow get access token
           *  within this function and store it in local storage using saveAuthToken function
           *
           *  Things to do here:
           *  1. Check credentials and throw an error if the credentials are not correct.
           *  2. Get the access token based on the user credentials.
           *  3. Save access token to local storage.
           *  4. Get user data and save it to current context. To do this,
           *     use setUser({your user data as key-value pair})
           *
           *  Things not to do here:
           *  1. Validate credentials. The credentials are already validated on the login page.
           *     If you want to change validation logic, look for validationSchema on Login screen.
           *
           *  Example:
           *  import {saveAuthToken} from '@app/storage'
           *
           *  const authToken = 'your access token';
           *
           *  // Setting token for current context.
           *  setToken(authToken);
           *
           *  // Saving token for future usage
           *  await saveAuthToken(authToken);
           *  **/
          setUser({
            username: 'Test User',
            email: 'someone@example.com',
          });
          return true;
        },
        logout: async () => {
          setUser(false);
          return true;
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
