import { useState } from 'react';

import * as S from './styles';
import * as I from './interfaces';
import Logo from 'components/Logo';

export default function Login({  }: I.AuthProps) {
  return (
    <S.Container>
      <S.Main>
        <Logo />

        <S.Paragraph>Please, enter your credentials.</S.Paragraph>

        <S.Wrapper>
          <S.Label>E-Mail</S.Label>
          <S.Input />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label>Password</S.Label>
          <S.Input />
        </S.Wrapper>

        <S.Button>LOGIN</S.Button>
      </S.Main>

      <S.Register>Don't have an account?</S.Register>
    </S.Container>
  );
}
