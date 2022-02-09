import React from 'react';

export interface AppContextProps {
  handleOpenCart: () => void;
  handleCloseCart: () => void;
  handleToggleCart: () => void;
  isCartOpen: boolean;

  cartItemsLength: number;
}

export interface AppProviderProps {
  children: React.ReactNode;
}
