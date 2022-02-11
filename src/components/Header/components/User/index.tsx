import { useCallback, useContext } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import { BiCart } from 'react-icons/bi';

import { AppContext } from 'context/App';
import { AuthContext } from 'context/Auth';

export default function User({  }: I.UserProps) {
  const { handleOpenCart, cartItemsLength } = useContext(AppContext);
  const { email, accounts, exitAccount } = useContext(AuthContext);

  const username = accounts.find((account) => account.email === email)?.username;

  const isNotEmpty = !!cartItemsLength;

  const handleExitAccount = useCallback(() => exitAccount(), [exitAccount]);

  const formattedUsername = username?.split(' ').at(0);
  
  return (
    <S.Container>
      <S.Cart 
        isNotEmpty={isNotEmpty}
        data-items-length={cartItemsLength}
        onClick={handleOpenCart}
      >
        <BiCart size="2.125rem" />
      </S.Cart>

      <S.Username>{formattedUsername}</S.Username>

      <S.Image />

      <S.Exit onClick={handleExitAccount}>Exit</S.Exit>
    </S.Container>
  );
}
