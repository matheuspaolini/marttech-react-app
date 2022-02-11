import { AuthContext } from 'context/Auth';
import { useCallback, useState, createContext, useEffect, useContext } from 'react';

import * as I from './interfaces';

export const AppContext = createContext({} as I.AppContextProps);

export const { Provider } = AppContext;

export default function AppProvider({ children }: I.AppProviderProps) {
  const { accounts, isAuthenticated, email, updateCart } = useContext(AuthContext);

  const currentAccount = accounts
    .find((account) => account.email === email);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<I.CartItem[]>([]);

  const [orders, setOrders] = useState<I.Order[]>([]);

  const cartItemsLength = cartItems.length;

  const handleOpenCart = useCallback(() => setIsCartOpen(true), []);
  const handleCloseCart = useCallback(() => setIsCartOpen(false), []);
  const handleToggleCart = useCallback(() => setIsCartOpen((previous) => !previous), []);

  const cleanUpCartItems = useCallback(() => setCartItems([]), []);

  const removeCartItem = useCallback((id: number) => {
    if (!isAuthenticated) return;

    setCartItems((previous) => previous.filter((cartItems) => cartItems.id !== id));
  }, [isAuthenticated]);

  const insertCartItem = useCallback((cartItem: I.CartItem) => {
    if (!isAuthenticated) return;

    const cartItemsIds = cartItems.map(({ id }) => id);
    const isItemAlreadyInCart = cartItemsIds.includes(cartItem.id);

    if (isItemAlreadyInCart) return;

    setCartItems((previous) => ([...previous, cartItem]));
  }, [isAuthenticated, cartItems]);

  const isItemAlreadyOnCart = useCallback(
    (id: number) => !!cartItems.find((cartItem) => cartItem.id === id), [cartItems]
  );

  const changeCartItemQuantity = useCallback((id: number, isIncrement: boolean) => {
    if (!isAuthenticated) return;

    const previousCartItems = [...cartItems];

    const currentCartItem = previousCartItems.find((previousCartItem) => previousCartItem.id === id);

    if (!currentCartItem) return;

    const isDecrement = !isIncrement;
    const isGreaterThanOne = currentCartItem.quantity > 1;
    
    if (isIncrement) currentCartItem.quantity += 1;
    if (isDecrement && isGreaterThanOne) currentCartItem.quantity -= 1; 

    setCartItems(previousCartItems);
  }, [cartItems, isAuthenticated]);

  const createOrder = useCallback((order: I.Order) => {
    setOrders((previous) => ([...previous, order]));
  }, []);

  const finishOrder = useCallback(() => {
    if (!cartItems) return;

    if (!currentAccount) return;

    const date = new Date();

    const { password, ...accountWithoutPassword } = currentAccount;

    const order = ({
      account: accountWithoutPassword,
      cartItems,
      createdAt: date
    });

    createOrder(order);
    cleanUpCartItems();
    setIsCartOpen(false);
  }, [cartItems]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const cartItems = currentAccount?.cartItems ?? [];

    setCartItems(cartItems);
  }, [isAuthenticated]);

  useEffect(() => {
    updateCart(email, cartItems);
  }, [cartItems]);

  const AppProviderValues = ({
    handleOpenCart,
    handleCloseCart,
    handleToggleCart,
    isCartOpen,

    cartItems,
    setCartItems,

    removeCartItem,
    insertCartItem,
    changeCartItemQuantity,

    finishOrder,
    orders,
    createOrder,

    cartItemsLength,
    isItemAlreadyOnCart,
  });

  return <Provider value={AppProviderValues}>{children}</Provider>
}
