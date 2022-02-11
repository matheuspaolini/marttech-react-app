import * as S from './styles';
import * as I from './interfaces';

export default function AuthMenu({  }: I.AuthMenuProps) {
  return (
    <S.Container>
      <S.Anchor to="/auth/login">Enter</S.Anchor>

      <S.Field>/</S.Field>

      <S.Anchor to="/auth/register">Register</S.Anchor>
    </S.Container>
  );
}
