import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding-top: 6rem;
`;

export const Main = styled.div`
  width: 100%;
  max-width: 77.5rem;

  display: flex;
  align-items: flex-start;
  justify-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;

  margin: 0 auto;

  padding-bottom: 2rem;
`;

export const Banner = styled.img`
  height: auto;
  width: 100%;
  max-width: 40rem;

  padding: 2rem;
`;

export const BannerSection = styled.div`
  position: relative;

  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  
  padding: 3rem;

  margin: 2rem auto;

  transition: 0.25s ease;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
    margin: 0.5rem auto;
  }
`;

export const InnerText = styled.h1<{ removeBold?: boolean; opacity?: number; fontSize?: string }>`
  font-size: 3rem;
  font-weight: normal;

  white-space: nowrap;

  color: rgba(0, 0, 0, 0.125);

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    padding: 1rem;
  }
`;

export const Section = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const List = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  padding: 0 2rem;
`;

export const ToggleList = styled.button`
  font-size: 1.25rem;

  margin: 0 auto;

  padding: 0.5rem;

  width: 10rem;

  background: darkgray;

  border-radius: 0.5rem;

  color: white;

  :hover {
    background: black;
  }
`;