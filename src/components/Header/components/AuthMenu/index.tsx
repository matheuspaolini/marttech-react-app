import * as S from './styles';
import * as I from './interfaces';

export default function AuthMenu({  }: I.AuthMenuProps) {
  return (
    <S.Container>
      <S.Field>Enter</S.Field>
      <S.Field>/</S.Field>
      <S.Field>Register</S.Field>
    </S.Container>
  );
}
