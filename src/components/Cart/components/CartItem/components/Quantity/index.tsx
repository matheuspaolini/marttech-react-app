import { useContext, useCallback } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import { FiMinus } from 'react-icons/fi';
import { BsPlusLg } from 'react-icons/bs'

import { AppContext } from 'context/App';

export default function Quantity({ id }: I.QuantityProps) {
  const { cartItems, changeCartItemQuantity } = useContext(AppContext);

  const currentQuantity = cartItems.find((cartItem) => cartItem.id === id)?.quantity;

  const increaseCartItemQuantity = useCallback(() => changeCartItemQuantity(id, true), [changeCartItemQuantity]);
  const decreaseCartItemQuantity = useCallback(() => changeCartItemQuantity(id, false), [changeCartItemQuantity]);

  return (
    <S.Container>
      <S.Button onClick={decreaseCartItemQuantity}>
        <FiMinus size="1.25rem" />
      </S.Button>

      <S.Value>{currentQuantity}</S.Value>

      <S.Button onClick={increaseCartItemQuantity}>
        <BsPlusLg size="0.75rem" />
      </S.Button>
    </S.Container>
  );
}
