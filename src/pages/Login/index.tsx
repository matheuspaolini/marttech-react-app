import { useCallback, useContext, useRef, MouseEvent } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import Logo from 'components/Logo';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from 'context/Auth';

import { GoArrowSmallLeft } from 'react-icons/go';

export default function Login({  }: I.AuthProps) {
  const { accessAccount, isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const form = formRef.current;

    if (!form) return;

    const { email, password } = form;

    const account = ({ email: email.value, password: password.value });

    accessAccount(account);
  }, [accessAccount]);

  if (isAuthenticated) navigate('/');

  return (
    <S.Container>
      <S.Main ref={formRef}>
        <Logo />

        <S.Paragraph>Please, enter your credentials.</S.Paragraph>

        <S.Wrapper>
          <S.Label>E-Mail</S.Label>
          <S.Input name="email" type="email" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label>Password</S.Label>
          <S.Input name="password" type="password" />
        </S.Wrapper>

        <S.Button onClick={handleSubmit}>LOGIN</S.Button>
      </S.Main>

      <Link to="/auth/register">
        <S.Register>Don't have an account?</S.Register>
      </Link>

      <S.Back href="/">
        <GoArrowSmallLeft size="1.5rem" />
        Back to Home page.
      </S.Back>
    </S.Container>
  );
}
