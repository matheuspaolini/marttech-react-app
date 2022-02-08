import { useState } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import Categories from './components/Categories';
import User from './components/User';
import AuthMenu from './components/AuthMenu';

export default function Header({ }: I.HeaderProps) {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <S.Container>
      <S.Main>
        <S.Logo>MShop</S.Logo>

        <S.Anchors>
          <S.Anchor>Home</S.Anchor>

          <Categories />

          <S.Anchor>Contact</S.Anchor>
        </S.Anchors>

        <S.Right /* onClick={() => setIsAuth((previous) => !previous)} */ >
          {isAuth ? <User /> : <AuthMenu />}
        </S.Right>
      </S.Main>
    </S.Container>
  );
}
