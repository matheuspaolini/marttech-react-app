import * as S from './styles';
import * as I from './interfaces';

export default function AuthMenu({  }: I.AuthMenuProps) {
  return (
    <S.Container>
      <S.Anchor href="/auth/login">Enter</S.Anchor>

      <S.Field>/</S.Field>

      <S.Anchor href="/auth/register">Register</S.Anchor>
    </S.Container>
  );
}
