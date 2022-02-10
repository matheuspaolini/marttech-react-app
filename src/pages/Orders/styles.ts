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

export const List = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  padding: 0 2rem;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;
