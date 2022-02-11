import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.div`
  width: 100%;
  height: 6rem;

  border: 0.125rem solid lightgray;
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;

  font-size: 0.875rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: unset;

    gap: 0.5rem;

    justify-content: center;
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 3rem;
  height: 3rem;

  border-radius: 0.25rem;

  background: darkgray;
`;

export const Field = styled.div<{ strong?: boolean }>`
  font-weight: ${({ strong }) => strong && 'bold'};
  color: ${({ strong }) => strong ? 'black' : 'rgba(0, 0, 0, 0.75)'};
`;

export const Button = styled.button`
  width: 3rem;

  color: #60aedb;

  :hover {
    filter: brightness(0.5);
  }
`;

export const Details = styled.div<{ isOpen?: boolean }>`
  max-height: ${({ isOpen }) => isOpen ? '50rem' : 0};
  width: 100%;

  opacity: ${({ isOpen }) => isOpen ? 1 : 0};

  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  overflow: hidden;

  transition: 0.25s ease;
`;

export const ItemName = styled.div`
  width: 8rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Info = styled.div`
  opacity: 0.5;
  
  display: flex;
`;
