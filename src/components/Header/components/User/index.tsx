import { useContext } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import { BiCart } from 'react-icons/bi';

import { AppContext } from 'context/App';

export default function User({  }: I.UserProps) {
  const { handleOpenCart, cartItemsLength } = useContext(AppContext);

  const isNotEmpty = !!cartItemsLength;
  
  return (
    <S.Container>
      <S.Cart 
        isNotEmpty={isNotEmpty}
        data-items-length={cartItemsLength}
        onClick={handleOpenCart}
      >
        <BiCart size="2.125rem" />
      </S.Cart>

      <S.Username>Matheus</S.Username>

      <S.Image />
    </S.Container>
  );
}
