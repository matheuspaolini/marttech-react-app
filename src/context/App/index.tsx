import { useCallback, useState, createContext } from 'react';

import * as I from './interfaces';

export const AppContext = createContext({} as I.AppContextProps);

export const { Provider } = AppContext;

export default function AppProvider({ children }: I.AppProviderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleOpenCart = useCallback(() => setIsCartOpen(true), []);
  const handleCloseCart = useCallback(() => setIsCartOpen(false), []);
  const handleToggleCart = useCallback(() => setIsCartOpen((previous) => !previous), []);

  const AppProviderValues = ({
    handleOpenCart,
    handleCloseCart,
    handleToggleCart,
    isCartOpen,
  });

  return <Provider value={AppProviderValues}>{children}</Provider>
}
