import { useContext } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import { AppContext } from 'context/App';

export default function Cart({  }: I.CartProps) {
  const { isCartOpen, handleCloseCart } = useContext(AppContext);

  return (
    <S.Container isCartOpen={isCartOpen}>
      <S.CloseHolder onClick={handleCloseCart} />

      <S.Main isCartOpen={isCartOpen}>
        <h1>Seu carrinho</h1>
        
      </S.Main>
    </S.Container>
  );
}
