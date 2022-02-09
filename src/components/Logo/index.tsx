import * as S from './styles';
import * as I from './interfaces';

export default function Logo({ fontSize = '2rem' }: I.LogoProps) {
  return (
    <S.Logo style={{ fontSize }}>MShop</S.Logo>
  );
}
