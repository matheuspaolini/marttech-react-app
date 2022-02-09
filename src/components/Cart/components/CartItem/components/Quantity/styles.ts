import styled from 'styled-components';

export const Button = styled.button`
  width: 1.75rem;
  height: 1.75rem;

  background: rgb(55, 55, 55, 0.25);

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.25s ease;

  :hover {
    background: rgb(55, 55, 55);
  }
`;

export const Value = styled.div`
  height: 1.75rem;
  width: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.25rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;

  overflow: hidden;

  @media screen and (max-width: 450px) {
    border-radius: 0.25rem;

    ${Value} {
      font-size: 0.75rem;

      width: 1.5rem;
      height: 1.5rem;
    }

    ${Button} {
      width: 1.5rem;
      height: 1.5rem;

      svg {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
  }
`;
