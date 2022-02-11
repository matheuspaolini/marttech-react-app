import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.25rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Field = styled.div``;

export const Anchor = styled(Link)``;
