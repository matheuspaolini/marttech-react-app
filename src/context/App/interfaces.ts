import { Account } from 'context/Auth/interfaces';
import React from 'react';

export interface AppContextProps {
  handleOpenCart: () => void;
  handleCloseCart: () => void;
  handleToggleCart: () => void;
  isCartOpen: boolean;

  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  
  removeCartItem: (id: number) => void;
  insertCartItem: (cartItem: CartItem) => void;
  changeCartItemQuantity: (id: number, isIncrement: boolean) => void;

  orders: Order[];
  createOrder: (order: Order) => void;
  finishOrder: () => void;

  cartItemsLength: number;
  isItemAlreadyOnCart: (id: number) => boolean;
}

export interface AppProviderProps {
  children: React.ReactNode;
}

export interface Order {
  cartItems: CartItem[];
  account: Omit<Account, 'password'>;
  createdAt: Date;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
