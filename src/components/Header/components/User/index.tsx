import { useContext } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import { BiCart } from 'react-icons/bi';

import { AppContext } from 'context/App';

export default function User({  }: I.UserProps) {
  const { handleOpenCart } = useContext(AppContext);

  const itemsLength = 99;
  const isNotEmpty = !!itemsLength;
  
  return (
    <S.Container>
      <S.Cart 
        isNotEmpty={isNotEmpty}
        data-items-length={itemsLength}
        onClick={handleOpenCart}
      >
        <BiCart size="2rem" />
      </S.Cart>

      <S.Username>Matheus</S.Username>

      <S.Image />
    </S.Container>
  );
}
