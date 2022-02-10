import { useContext, useState } from 'react';

import { AuthContext } from 'context/Auth';

import * as S from './styles';
import * as I from './interfaces';

import useWindowSize from 'hooks/useWindowSize';

import Logo from 'components/Logo';

import Categories from './components/Categories';
import User from './components/User';
import AuthMenu from './components/AuthMenu';
import MobileHeader from './components/MobileHeader';

export default function Header({ }: I.HeaderProps) {
  const { isAuthenticated } = useContext(AuthContext);

  const { width } = useWindowSize();

  const isMediumDevice = !!width && width <= 768;
  
  if (isMediumDevice) return <MobileHeader />

  return (
    <S.Container>
      <S.Main>
        <Logo />

        <S.Anchors>
          <S.Anchor href="/">Home</S.Anchor>

          <Categories />

          <S.Anchor href="/contact">Contact</S.Anchor>
          <S.Anchor href="/orders">Orders</S.Anchor>
        </S.Anchors>

        <S.Wrapper>
          {isAuthenticated ? <User /> : <AuthMenu />}
        </S.Wrapper>
      </S.Main>
    </S.Container>
  );
}
