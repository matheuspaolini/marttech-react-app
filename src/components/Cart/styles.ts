import styled from 'styled-components';

export const Container = styled.div<{ isCartOpen?: boolean }>`
  position: fixed;
  right: 0;
  top: 0;

  z-index: 10;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: rgba(0, 0, 0, 0.25);

  opacity: ${({ isCartOpen }) => isCartOpen ? '1' : '0'};
  pointer-events: ${({ isCartOpen }) => isCartOpen ? 'all' : 'none'};

  overflow: hidden;
  
  transition: 0.25s;
`;

export const CloseHolder = styled.div`
  height: 100%;
  width: 100%;

  transition: 0.35s;

  @media screen and (max-width: 768px) {
    width: 0;
  }
`;

export const Main = styled.div<{ isCartOpen?: boolean }>`
  width: 100%;
  max-width: ${({ isCartOpen }) => isCartOpen ? '35rem' : '0'};
  height: 100%;

  padding: 2rem;

  background: white;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  box-shadow: -0.25rem 0 1rem rgba(0, 0, 0, 0.25);

  transition: 0.35s;

  @media screen and (max-width: 768px) {
    max-width: unset;
  }

  @media screen and (max-width: 450px) {
    padding: 0.75rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2``;

export const Close = styled.button`
  padding-right: 1rem;

  opacity: 0.25;

  font-size: 1.25rem;

  :hover {
    opacity: 1;
  }
`;

export const Items = styled.div`
  padding: 1rem 0;

  height: calc(100% - 2rem - 28px - 2.5rem);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  overflow-y: scroll;
`;

export const Finish = styled.button`
  margin-top: 1.5rem;

  width: 100%;
  min-height: 2.5rem;

  font-size: 1.125rem;
  font-weight: bold;

  color: white;

  background: black;

  border-radius: 0.25rem;

  transition: 0.25s ease;

  :hover {
    background: darkgray;
  }
`;
