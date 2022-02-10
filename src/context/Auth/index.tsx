import { createContext, useCallback, useEffect, useState } from 'react';

import * as I from './interfaces';

export const AuthContext = createContext({} as I.AuthContextProps);

const { Provider } = AuthContext;

export default function AuthProvider({ children }: I.AuthProviderProps) {
  const [email, setEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [accounts, setAccounts] = useState<I.Account[]>([
    {
      username: 'matheus',
      email: 'matheus.miranda@leadsoft.inf.br',
      address: '1',
      cpf: '2',
      password: '3',
      cartItems: []
    }
  ]);

  const accessAccount = useCallback(({ email, password }: I.AccessAccountForm) => {
    const account = accounts.find((account) => account.email === email);

    console.log({ email, password });

    if (!account) return console.log('Account doesn\'t exists.');

    if (account.password !== password) return console.log('Passwords doesn\'t match.');

    setEmail(account.email);
    setIsAuthenticated(true);
  }, [accounts]);

  const createAccount = useCallback((account: I.Account) => {
    const { email } = account;

    const accountAlreadyExists = accounts.find((account) => account.email === email);

    if (accountAlreadyExists) return;
    
    setAccounts((previous) => ([...previous, account]));
  }, [accounts]);

  const AuthProviderValues = ({
    email,
    isAuthenticated,

    accounts,
    createAccount,
    accessAccount,
  });
  
  return <Provider value={AuthProviderValues}>{children}</Provider>
} 