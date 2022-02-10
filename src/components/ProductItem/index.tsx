import * as S from './styles';
import * as I from './interfaces';

export default function ProductItem({ id, category, image, price, title  }: I.ProductItemProps) {
  return (
    <S.Container>
      <S.Thumb>
        <S.Image draggable={false} src={image} />
      </S.Thumb>

      <S.Title title={title}>{title}</S.Title>

      <S.Category>{category}</S.Category>

      <S.Price>$ {price}</S.Price>

      <S.Button>ADD TO CART</S.Button>
    </S.Container>
  );
}
