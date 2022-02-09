import { useState } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import useWindowSize from 'hooks/useWindowSize';

import Logo from 'components/Logo';

import Categories from './components/Categories';
import User from './components/User';
import AuthMenu from './components/AuthMenu';
import MobileHeader from './components/MobileHeader';

export default function Header({ }: I.HeaderProps) {
  const { width } = useWindowSize();

  const isMediumDevice = !!width && width <= 768;

  const [isAuth, setIsAuth] = useState(true);

  if (isMediumDevice) return <MobileHeader />

  return (
    <S.Container>
      <S.Main>
        <Logo />

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
