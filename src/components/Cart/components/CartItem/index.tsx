import * as S from './styles';
import * as I from './interfaces';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import Quantity from './components/Quantity';

export default function CartItem({  }: I.CartItemProps) {
  return (
    <S.Container>
      <S.Flex>
        <S.Image />
  
        <S.Wrapper>
          <S.Name title="Camiseta">Camiseta</S.Name>
          <S.Price>R$ 30,00</S.Price>
          {/* <S.Subtotal>Subtotal: R$ 30,00</S.Subtotal> */}
        </S.Wrapper>
      </S.Flex>


      <S.Flex>
        <Quantity />
        
        <S.Delete>
          <AiOutlineCloseCircle size={24} />
        </S.Delete>
      </S.Flex>
    </S.Container>
  );
}
