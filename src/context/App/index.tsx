import { useCallback, useState, createContext, useEffect } from 'react';

import * as I from './interfaces';

export const AppContext = createContext({} as I.AppContextProps);

export const { Provider } = AppContext;

export default function AppProvider({ children }: I.AppProviderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<I.CartItem[]>([
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
  ]);

  const cartItemsLength = cartItems.length;

  const handleOpenCart = useCallback(() => setIsCartOpen(true), []);
  const handleCloseCart = useCallback(() => setIsCartOpen(false), []);
  const handleToggleCart = useCallback(() => setIsCartOpen((previous) => !previous), []);

  const removeCartItem = useCallback((id: number) => {
    setCartItems((previous) => previous.filter((cartItems) => cartItems.id !== id));
  }, []);

  const changeCartItemQuantity = useCallback((id: number, isIncrement: boolean) => {
    const previousCartItems = [...cartItems];

    const currentCartItem = previousCartItems.find((previousCartItem) => previousCartItem.id === id);

    if (!currentCartItem) return;

    const isDecrement = !isIncrement;
    const isGreaterThanOne = currentCartItem.quantity > 1;
    
    if (isIncrement) currentCartItem.quantity += 1;
    if (isDecrement && isGreaterThanOne) currentCartItem.quantity -= 1; 

    setCartItems(previousCartItems);
  }, [cartItems]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const AppProviderValues = ({
    handleOpenCart,
    handleCloseCart,
    handleToggleCart,
    isCartOpen,

    cartItems,
    setCartItems,

    removeCartItem,
    changeCartItemQuantity,

    cartItemsLength,
  });

  return <Provider value={AppProviderValues}>{children}</Provider>
}
