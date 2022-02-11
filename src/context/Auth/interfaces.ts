import { CartItem } from 'context/App/interfaces';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;

  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;

  accessAccount: ({ email, password }: AccessAccountForm) => void;
  exitAccount: () => void;
  createAccount: (account: Account) => void;
  accounts: Account[];

  updateCart: (email: string, cartItems: CartItem[]) => void;
}

export interface Account {
  username: string;
  password: string;
  email: string;
  cpf: string;
  city: string;
  cartItems: CartItem[];
}



export interface AccessAccountForm {
  email: string;
  password: string;
}
