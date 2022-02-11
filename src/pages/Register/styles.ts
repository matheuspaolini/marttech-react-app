import styled from 'styled-components';

import banner from 'assets/banner.jpeg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 1rem;
`;

export const Main = styled.form`
  width: 100%;
  max-width: 20rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  padding: 1rem;
  margin-bottom: 1rem;

  border: 0.125rem solid lightgray;
  border-radius: 0.5rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;

  opacity: 0.5;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  width: 100%;
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 100%;
  height: 2rem;

  padding-left: 0.25rem;

  font-size: 1rem;

  border-radius: 0.25rem;
  border: 0.125rem solid black;
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;

  font-size: 1.25rem;

  color: white;

  border-radius: 0.5rem;

  background: black;
`;

export const Login = styled.button`
  color: #60aedb;

  font-size: 1rem;

  text-decoration: underline;
`;

export const Back = styled(Link)`
  margin-top: 1rem;

  display: flex;
  align-items: center;
`;
