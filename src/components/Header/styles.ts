import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;

  border-bottom: 0.125rem solid lightgray;
`;

export const Main = styled.div`
  width: 100%;
  height: 5rem;

  padding: 0 1.5rem;

  max-width: 80rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  border-left: 0.25rem solid black;

  padding-left: 0.5rem;

  font-size: 2rem;
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Anchors = styled.div`
  width: 100%;
  max-width: 25rem;

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 3rem;
`;

export const Anchor = styled.div`
  font-size: 1.25rem;

  cursor: pointer;

  text-transform: capitalize;

  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: black;
    color: white;
  }
`;

export const Right = styled.div`
  height: 100%;
  width: 12rem;

  display: flex;
  align-items: center;
  justify-content: center
`;