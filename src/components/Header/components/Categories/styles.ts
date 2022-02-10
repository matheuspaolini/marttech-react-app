import styled from 'styled-components';

const itemHeight = '4rem';

export const Container = styled.div`
  position: relative;

  height: 100%;
`;

export const Title = styled.div`
  font-size: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 11rem;

  cursor: default;

  :hover {
    background: black;
    color: white;
  }
`;

export const List = styled.ul<{ length: number; isOpen: boolean }>`
  position: absolute;
  left: 50%;

  transform: translateX(-50%);

  border: 0.125rem solid lightgray;

  height: ${({ length, isOpen }) => isOpen ? `calc(${length} * ${itemHeight})` : '0'};

  opacity: ${({ isOpen }) => isOpen ? 1 : 0};

  background: white;

  transition: 0.25s ease;

  overflow: hidden;
`;

export const Item = styled.a`
  font-size: 1.25rem;

  width: 11rem;
  height: ${itemHeight};

  padding: 0.5rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: capitalize;

  background: white;

  cursor: pointer;

  :hover {
    background: black;
    color: white;
  }
`;
