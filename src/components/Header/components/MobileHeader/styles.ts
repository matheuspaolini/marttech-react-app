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
  gap: 1rem;
`;

export const Menu = styled.button``;

export const List = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;

  height: ${({ isOpen }) => isOpen ? '100%' : 0};
  width: 100%;

  opacity: ${({ isOpen }) => isOpen ? 1 : 0};

  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  background: white;

  overflow: hidden;

  transition: 0.5s ease;
`;

export const Anchor = styled.div`
  font-size: 1.5rem;

  cursor: pointer;

  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: capitalize;

  :hover {
    background: black;
    color: white;
  }
`;

export const Close = styled.button``;
