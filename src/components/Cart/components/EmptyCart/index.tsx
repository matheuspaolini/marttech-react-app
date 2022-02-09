import * as S from './styles';
import * as I from './interfaces';

export default function EmptyCart({  }: I.EmptyCartProps) {
  return (
    <S.Container>
      <S.Message>Your MShop cart is empty.</S.Message>
    </S.Container>
  );
}
