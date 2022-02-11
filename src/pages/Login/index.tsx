import { useCallback, useContext, useRef, MouseEvent, useEffect } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import Logo from 'components/Logo';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from 'context/Auth';

import { GoArrowSmallLeft } from 'react-icons/go';
import { toast } from 'react-toastify';

export default function Login({  }: I.AuthProps) {
  const { accounts, accessAccount, isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const form = formRef.current;

    if (!form) return;

    const { email, password } = form;

    const accountExists = accounts.find((account) => account.email === email.value);

    if (!accountExists) {
      toast.error('Incorrect e-mail or password.');

      return;
    }

    const isPasswordIncorrect = accountExists.password !== password.value;
    const isEmailIncorrect = accountExists.email !== email.value;

    if (isPasswordIncorrect || isEmailIncorrect) {
      toast.error('Incorrect e-mail or password.');

      return;
    };

    const account = ({ email: email.value, password: password.value });

    accessAccount(account);
  }, [accessAccount, accounts]);

  useEffect(() => {
    isAuthenticated && navigate('/');
  }, [isAuthenticated]);

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

      <S.Back to="/">
        <GoArrowSmallLeft size="1.5rem" />
        Back to Home page.
      </S.Back>
    </S.Container>
  );
}
