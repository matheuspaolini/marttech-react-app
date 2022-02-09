import { createContext, useState } from 'react';

import * as I from './interfaces';

export const AuthContext = createContext({} as I.AuthContextProps);

const { Provider } = AuthContext;

export default function AuthProvider({ children }: I.AuthProviderProps) {
  const [username, setUsername] = useState('');

  const AuthProviderValues = ({
    
  });
  
  return <Provider value={AuthProviderValues}>{children}</Provider>
} 