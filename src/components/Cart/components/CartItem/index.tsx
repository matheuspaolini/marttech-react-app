import { useContext, useCallback } from 'react';

import * as S from './styles';
import * as I from './interfaces';

import { AiOutlineCloseCircle } from 'react-icons/ai';

import Quantity from './components/Quantity';

import { AppContext } from 'context/App';

export default function CartItem({ id, title, price, image, quantity }: I.CartItemProps) {
  const { removeCartItem } = useContext(AppContext);

  const handleRemoveCartItem = useCallback(() => removeCartItem(id), [removeCartItem]);

  return (
    <S.Container>
      <S.Flex>
        <S.Image draggable={false} src={image} />
  
        <S.Wrapper>
          <S.Name title={title}>{title}</S.Name>
          <S.Price>$ {price}</S.Price>
          <S.Subtotal>x {quantity} = $ {price * quantity} </S.Subtotal>
        </S.Wrapper>
      </S.Flex>

      <S.Flex>
        <Quantity id={id} />
        
        <S.Delete onClick={handleRemoveCartItem}>
          <AiOutlineCloseCircle size={24} />
        </S.Delete>
      </S.Flex>
    </S.Container>
  );
}
