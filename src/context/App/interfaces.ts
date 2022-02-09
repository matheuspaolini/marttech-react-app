import React from 'react';

export interface AppContextProps {
  handleOpenCart: () => void;
  handleCloseCart: () => void;
  handleToggleCart: () => void;
  isCartOpen: boolean;

  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  
  removeCartItem: (id: number) => void;
  changeCartItemQuantity: (id: number, isIncrement: boolean) => void;

  cartItemsLength: number;
}

export interface AppProviderProps {
  children: React.ReactNode;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
