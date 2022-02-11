import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  padding-top: 8rem;
`;

export const Main = styled.div`
  width: 100%;
  max-width: 77.5rem;

  display: flex;
  align-items: flex-start;
  justify-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;

  margin: 0 auto;

  padding-bottom: 2rem;
`;

export const Section = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;

  padding: 0 2rem;

  align-self: flex-start;

  text-transform: uppercase;

  @media screen and (max-width: 500px) {
    align-self: center;
  }
`;

export const Search = styled.input`
  width: calc(100% - 4rem);
  height: 2.5rem;

  border: 0.125rem solid lightgray;
  border-radius: 0.25rem;

  margin: 0 auto;

  padding-left: 0.5rem;

  font-size: 1rem;
`;

export const List = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0 2rem;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;
