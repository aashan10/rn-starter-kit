import {useContext} from 'react';
import {AuthContext} from '@app/contexts';

export const useAuth = () => {
  return useContext(AuthContext);
};
