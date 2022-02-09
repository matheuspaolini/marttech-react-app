import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 5rem;

  border: 0.125rem solid lightgray;
  border-radius: 0.25rem;

  padding: 1rem;

  transition: 0.25s ease;

  @media screen and (max-width: 450px) {
    padding: 0.5rem;
    height: 4.25rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 450px) {
    gap: 0.5rem;
  }
`;

export const Image = styled.img`
  width: 2.5rem;
  height: auto;
`;

export const Wrapper = styled.div``;

export const Name = styled.div`
  width: 10rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 768px) {
    width: 3.75rem;
  }
`;

export const Price = styled.div``;

export const Subtotal = styled.div``;

export const Delete = styled.button``;
