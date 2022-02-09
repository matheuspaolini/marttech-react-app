import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 2rem;
  margin: 2rem 0;

  color: lightgray;
  
  border: 0.125rem solid lightgray;
  border-radius: 0.25rem;
`;

export const Message = styled.div`
  font-size: 2rem;

  white-space: nowrap;
`;
