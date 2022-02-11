import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  padding: 1rem;

  max-width: 12.5rem;

  border: 0.125rem solid lightgray;
  border-radius: 0.5rem;
`;

export const Thumb = styled.div`
  width: 100%;
  height: 12rem;

  display: flex;
  align-items: center;
  justify-items: center;
`;

export const Image = styled.img`
  height: auto;
  width: 5rem;

  margin: 0 auto;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 1.25rem;

  max-width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Category = styled.div`
  text-transform: capitalize;

  opacity: 0.5;
`;

export const Price = styled.div`
  font-size: 1.25rem;
`;

export const Button = styled.button<{ isOnCart?: boolean }>`
  margin-top:  0.5rem;

  width: 100%;
  min-height: 2.5rem;

  font-size: 1.125rem;
  font-weight: bold;

  color: white;

  background: ${({ isOnCart }) => isOnCart ? 'lightgray' : 'black'};

  border-radius: 0.25rem;

  transition: 0.25s ease;

  :hover {
    background: ${({ isOnCart }) => !isOnCart && 'darkgray'};
  }
`;
