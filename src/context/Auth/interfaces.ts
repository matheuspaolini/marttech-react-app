import { CartItem } from 'context/App/interfaces';
import { ReactNode } from 'react';

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextProps {
  email: string;
  isAuthenticated: boolean;

  accounts: Account[];
  createAccount: (account: Account) => void;
  accessAccount: ({ email, password }: AccessAccountForm) => void;
}

export interface Account {
  username: string;
  password: string;
  email: string;
  cpf: string;
  address: string;
  cartItems: CartItem[];
}

export interface AccessAccountForm {
  email: string;
  password: string;
}
