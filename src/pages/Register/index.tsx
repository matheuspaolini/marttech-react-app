import { MouseEvent, useCallback, useContext, useEffect, useRef } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import Logo from 'components/Logo';

import { Link, useNavigate } from 'react-router-dom';

import { Account } from 'context/Auth/interfaces';
import { AuthContext } from 'context/Auth';

import { GoArrowSmallLeft } from 'react-icons/go';
import { toast } from 'react-toastify';

export default function Register({  }: I.AuthProps) {
  const { accounts, createAccount, isAuthenticated, setIsAuthenticated, setEmail } = useContext(AuthContext);

  const formRef = useRef<HTMLFormElement | null>(null);

  const navigate = useNavigate();

  const handleSubmit = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const form = formRef.current;

    if (!form) return;

    const { username, email, city, cpf, password, confirmPassword } = form;

    const accountAlreadyExists = accounts.find((account) => account.email === email.value);

    if (accountAlreadyExists) {
      toast.error('E-mail already taken!');
      return;
    }

    const newAccount: Account = ({
      username: username.value,
      email: email.value,
      city: city.value,
      cpf: cpf.value,
      password: password.value,
      cartItems: [],
    });

    createAccount(newAccount);

    setEmail(email.value);
    setIsAuthenticated(true);

    toast.success(`Welcome to MShop, ${username.value}! :)`);
  }, [createAccount, accounts]);

  useEffect(() => {
    isAuthenticated && navigate('/');
  }, [isAuthenticated]);
  
  return (
    <S.Container>
      <S.Main ref={formRef}>
        <Logo />

        <S.Paragraph>Please, fill in the fields below.</S.Paragraph>

        <S.Wrapper>
          <S.Label>Name</S.Label>
          <S.Input name="username" type="text" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label>E-mail</S.Label>
          <S.Input name="email" type="email" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label>City</S.Label>
          <S.Input name="city" type="text" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label>CPF</S.Label>
          <S.Input name="cpf" type="text" /> {/* Random CPF */}
        </S.Wrapper>

        <S.Wrapper>
          <S.Label>Password</S.Label>
          <S.Input name="password" type="password" />
        </S.Wrapper>

        <S.Wrapper>
          <S.Label>Confirm Password</S.Label>
          <S.Input name="confirmPassword" type="password" />
        </S.Wrapper>

        <S.Button onClick={handleSubmit}>REGISTER</S.Button>
      </S.Main>

      <Link to="/auth/login">
        <S.Login>Already have an account?</S.Login>
      </Link>

      <S.Back to="/">
        <GoArrowSmallLeft size="1.5rem" />
        Back to Home page.
      </S.Back>
    </S.Container>
  );
}
