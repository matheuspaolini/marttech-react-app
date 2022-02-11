import { CartItem } from 'context/App/interfaces';
import { createContext, useCallback, useEffect, useState } from 'react';

import * as I from './interfaces';

export const AuthContext = createContext({} as I.AuthContextProps);

const { Provider } = AuthContext;

export default function AuthProvider({ children }: I.AuthProviderProps) {
  const [email, setEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const insertAccountInLocalStorage = useCallback((account: I.Account) => {
    const stringfiedAccounts = localStorage.getItem('_accounts');

    if (!stringfiedAccounts)
      return localStorage.setItem('_accounts', '[' + JSON.stringify(account) + ']');

    const previousAccounts: I.Account[] = JSON.parse(stringfiedAccounts);

    const newAccounts = ([...previousAccounts, account]);

    const stringfiedNewAccounts = JSON.stringify(newAccounts);

    localStorage.setItem('_accounts', stringfiedNewAccounts);
  }, []);

  const updateAccountCartItemsInLocalStorage = useCallback((email: string, cartItems: CartItem[]) => {
    const stringfiedAccounts = localStorage.getItem('_accounts');

    if (!stringfiedAccounts) return;
    
    const accounts: I.Account[] = JSON.parse(stringfiedAccounts);
    
    const account = accounts.find((account) => account.email === email);

    if (!account) return;

    account.cartItems = cartItems;

    const newStringfiedAccounts = JSON.stringify(accounts);

    localStorage.setItem('_accounts', newStringfiedAccounts);
  }, []);

  const insertEmailInLocalStorage = useCallback((email: string) => {
    localStorage.setItem('_auth', email);
  }, []);

  const removeEmailFromLocalStorage = useCallback(() => {
    localStorage.setItem('_auth', '');
  }, []);

  const [accounts, setAccounts] = useState<I.Account[]>([
    {
      username: 'Name Example',
      email: 'example@example.com.br',
      city: 'City Example',
      cpf: '506.684.420-18',
      password: '3X4MPL3',
      cartItems: [
        {
          id: 1,
          title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
          price: 109.95,
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          quantity: 1
        },
        {
          id: 7,
          title: 'White Gold Plated Princess',
          price: 9.99,
          image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
          quantity: 1,
        },
        {
          id: 13,
          title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
          price: 599,
          image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
          quantity: 1,
        },
        {
          id: 19,
          title: 'Opna Women\'s Short Sleeve Moisture',
          price: 7.95,
          image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
          quantity: 1,
        },
        {
          id: 4,
          title: 'Mens Casual Slim Fit',
          price: 15.99,
          image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
          quantity: 1,
        },
      ]
    }
  ]);

  const accessAccount = useCallback(({ email, password }: I.AccessAccountForm) => {
    const account = accounts.find((account) => account.email === email);

    if (!account) return;

    if (account.password !== password) return;

    setEmail(account.email);
    setIsAuthenticated(true);

    insertEmailInLocalStorage(account.email);
  }, [accounts]);

  const exitAccount = useCallback(() => {
    setEmail('');
    setIsAuthenticated(false);
    removeEmailFromLocalStorage();
  }, []);

  const createAccount = useCallback((account: I.Account) => {
    const { email } = account;

    const accountAlreadyExists = accounts.find((account) => account.email === email);

    if (accountAlreadyExists) return;
    
    setAccounts((previous) => ([...previous, account]));
    insertAccountInLocalStorage(account);
    insertEmailInLocalStorage(account.email);
  }, [accounts, insertAccountInLocalStorage]);

  const updateCart = useCallback((email: string, cartItems: CartItem[]) => {
    const newAccountsState = [...accounts];
    const account = newAccountsState.find((account) => account.email === email);

    if (!account) return;

    account.cartItems = cartItems;

    setAccounts(newAccountsState);
    updateAccountCartItemsInLocalStorage(email, cartItems);
  }, [accounts]);

  useEffect(() => {
    const stringfiedAccounts = localStorage.getItem('_accounts');

    if (!stringfiedAccounts) return localStorage.setItem('_accounts', '');
    
    const accounts: I.Account[] = JSON.parse(stringfiedAccounts);

    console.log(accounts);

    setAccounts(accounts);
  }, []);

  useEffect(() => {
    const email = localStorage.getItem('_auth');

    if (!email) return;

    setEmail(email);
    setIsAuthenticated(true); 
  }, []);

  const AuthProviderValues = ({
    email,
    setEmail,

    isAuthenticated,
    setIsAuthenticated,

    accessAccount,
    exitAccount,
    createAccount,
    accounts,

    updateCart,
  });
  
  return <Provider value={AuthProviderValues}>{children}</Provider>
} 