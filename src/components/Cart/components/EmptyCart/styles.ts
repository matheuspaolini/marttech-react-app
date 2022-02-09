import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 2rem;

  color: lightgray;
  
  border: 0.125rem solid lightgray;
  border-radius: 0.25rem;
`;

export const Message = styled.div`
  font-size: 2rem;

  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
