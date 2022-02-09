import { useContext } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import { AppContext } from 'context/App';

import EmptyCart from './components/EmptyCart';
import CartItem from './components/CartItem';

export default function Cart({  }: I.CartProps) {
  const { isCartOpen, handleCloseCart, cartItemsLength } = useContext(AppContext);

  return (
    <S.Container isCartOpen={isCartOpen}>
      <S.CloseHolder onClick={handleCloseCart} />

      <S.Main isCartOpen={isCartOpen}>
        <S.Flex>
          <S.Title>Your Cart ({cartItemsLength})</S.Title>

          <S.Close onClick={handleCloseCart}>
            Close
          </S.Close>
        </S.Flex>

        <S.Items>
          {!cartItemsLength && <EmptyCart />}

          <CartItem />
          <CartItem />
          <CartItem />
        </S.Items>
      </S.Main>
    </S.Container>
  );
}
