import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`;

export const Username = styled.div`
  font-size: 1.25rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Image = styled.div`
  width: 3rem;
  height: 3rem;

  background: black;

  border-radius: 50%;
`;

export const Cart = styled.button<{ isNotEmpty?: boolean }>`
  position: relative;

  ::after {
    display: ${({ isNotEmpty }) => isNotEmpty ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    
    content: attr(data-items-length);

    position: absolute;
    top: -0.75rem;
    right: -0.75rem;

    width: 1.25rem;
    height: 1.25rem;

    background: red;

    border-radius: 50%;

    color: white;

    font-size: 0.875rem;
  }
`;

export const Exit = styled.button`
  font-size: 0.75rem;

  background: red;

  color: white;

  padding: 0.25rem;

  border-radius: 0.25rem;
`;
