import { useState } from 'react';

import * as S from './styles';
import * as I from './interfaces';
import Logo from 'components/Logo';

export default function Register({  }: I.AuthProps) {
  return (
    <S.Container>
      <S.Main>
        <Logo />

        <S.Paragraph>Please, fill in the fields below.</S.Paragraph>

        <S.Wrapper>
          <S.Label>Name</S.Label>
          <S.Input type="text" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label>E-mail</S.Label>
          <S.Input type="email" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label>CPF</S.Label>
          <S.Input type="text" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label>Password</S.Label>
          <S.Input type="password" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label>Confirm Password</S.Label>
          <S.Input type="password" />
        </S.Wrapper>

        <S.Button>REGISTER</S.Button>
      </S.Main>

      <S.Login>Already have an account?</S.Login>
    </S.Container>
  );
}
