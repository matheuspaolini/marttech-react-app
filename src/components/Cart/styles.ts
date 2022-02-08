import styled from 'styled-components';

export const Container = styled.div<{ isCartOpen?: boolean }>`
  position: absolute;
  right: 0;
  top: 0;

  z-index: 2;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: rgba(0, 0, 0, 0.25);

  opacity: ${({ isCartOpen }) => isCartOpen ? '1' : '0'};
  pointer-events: ${({ isCartOpen }) => isCartOpen ? 'all' : 'none'};
  
  transition: 0.25s;
`;

export const CloseHolder = styled.div`
  height: 100%;
  width: 100%;
`;

export const Main = styled.div<{ isCartOpen?: boolean }>`
  min-width: ${({ isCartOpen }) => isCartOpen ? '35rem' : '0'};
  height: 100%;

  padding: 2rem;

  background: white;

  box-shadow: -0.25rem 0 1rem rgba(0, 0, 0, 0.25);

  transition: 0.5s;
`;
